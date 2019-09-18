import { Network } from '@ionic-native/network/ngx';
import { SettingService } from './../service/setting.service';
import { Setting } from '../models/Setting';
import { WebServerSms } from '../service/client/webServer.sms.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  public active: boolean= false;
  public url: String;
  private setting: Setting;
  constructor(private serverSms: WebServerSms, private settingService: SettingService, private network: Network) {}

  ngOnInit(){
    if(this.active){
      this.urlSet();
    }
  }

  public openServer(){
    this.active = true;
    this.settingService.setSetting(this.network.type);
    this.serverSms.startServerSMS(7771);
    this.urlSet();
  }

  public closeServer(){
    this.active = false;
    this.serverSms.stopServerSMS();
  }

  urlSet(){
    this.setting = this.settingService.getSetting();
    this.url = 'http://'+this.setting.ipAddress+':'+this.setting.port;
  }
  
}
