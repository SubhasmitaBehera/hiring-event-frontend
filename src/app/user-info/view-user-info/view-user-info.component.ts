import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/Models/userinfo.model';
import { UserInfoService } from 'src/app/service/userInfo.services';

@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.css']
})
export class ViewUserInfoComponent implements OnInit {


  userInfos : UserInfo[];
  constructor(private userInfoService : UserInfoService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.userInfos = this.userInfoService.getUserInfo();
  }
}
