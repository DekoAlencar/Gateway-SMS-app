import { SettingService } from './../service/setting.service';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';
import { Component, OnInit } from '@angular/core';
import { Setting } from '../models/Setting';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public setting: Setting;
  constructor(private settingService: SettingService) { }

  ngOnInit(){
    this.setting = this.settingService.getSetting();
  }

}
