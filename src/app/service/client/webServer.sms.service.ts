import { SMS } from '@ionic-native/sms/ngx';
import { WebServer, Response } from '@ionic-native/web-server/ngx';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WebServerSms{
    private res: Response = {
        status: 200,
        body: 'OK',
        headers:{
          'Content-Type': 'text/html'
        }
    }

    private options = {
        replaceLineBreaks: true, 
        android: {
            intent: '' 
        }
    }

    constructor(private webServer: WebServer, private sms: SMS){}

    public startServerSMS(port: any){
        this.webServer.onRequest().subscribe((data)=>{
            console.log(data);
      
            var request: any = this.queryStringToJson(data.query)
      
            this.sendSms(request.number, request.msg);
            
            this.webServer.sendResponse(data.requestId, this.res)
            .catch((error: any) => console.error(error));
          });

        this.webServer.start(port).then((result)=>{
          console.log('Server is up');
        })
        .catch((error: any) => console.error(error));
    }

    public stopServerSMS(){
      this.webServer.stop().then((result)=>{
          console.log('Server is down');
      }).catch((error)=>{
          console.log(error);
      })
    }

    private sendSms(number:any, message:any){
        this.sms.send(number, message, this.options).then((sucess)=>{
            console.log('Send sms successful');
        }).catch((error)=>{
            console.log(error);
        })
    }

    private queryStringToJson(query: String){
        let params = query.split('&');

        var result = [];
        params.forEach((param)=>{
            let array = param.split('=');
            result[array[0]] = decodeURIComponent(array[1] || '');
        })
        return result;
    }
}