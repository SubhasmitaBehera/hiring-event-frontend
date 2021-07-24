import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from 'src/app/Models/userinfo.model';
import { UserInfoService } from 'src/app/service/userInfo.services';

@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.css']
})
export class ViewUserInfoComponent implements OnInit {


  userInfos : UserInfo[];
  constructor(private userInfoService : UserInfoService,
    private router : Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  enable() {
    this.router.navigate(["user-info"]);
  }
  enable1() {
    this.router.navigate(["user-info/view-user-info"]);
  }

  reloadData() {
    this.userInfos = this.userInfoService.getUserInfo();
  }
}
