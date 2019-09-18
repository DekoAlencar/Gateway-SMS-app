import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { Setting } from './../models/Setting';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  constructor(private networkInterface: NetworkInterface, private setting: Setting) { }

  setSetting(type: String){
    this.setting.port = 7771;
    this.setting.typeInterface = type;
    this.networkInterface.getWiFiIPAddress().then((data)=>{
      this.setting.ipAddress = data.ip;
    })
    window.localStorage.setItem('setting', JSON.stringify(this.setting));
  }
  
  getSetting(){
    this.setting = JSON.parse(window.localStorage.getItem('setting'));
    return this.setting;
  }
}
