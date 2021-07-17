import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserInfo } from '../Models/userinfo.model';
import { UserInfoService } from '../service/userInfo.services';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  titleUserInfo = "SET USER INFO"
  submitted : boolean = false;

 userinfo : UserInfo = new UserInfo();

  boolVar1: boolean = true;
  boolVar2: boolean = false;

  constructor(private userinfoService : UserInfoService,private route : ActivatedRoute) { }

  ngOnInit(): void {
  }


  addAgain(){
    this.submitted = false;

  }
  enable() {
    this.boolVar1 = true;
    this.boolVar2 = false;
  }
  enable1() {
    this.boolVar2 = true;
    this.boolVar1 = false;
  }

  save(){
    console.log(this.userinfo.loginProvider);
      console.log(this.userinfo.userType);
      console.log(this.userinfo.isMockUser);
      console.log(this.userinfo.loginProvider);
    this.userinfoService
    .createUserInfo(this.userinfo).subscribe((data) => {
      console.log(data);
      this.userinfo = new UserInfo();
    },
      (error) => console.log(error));

      setTimeout(() => {
        this.reloadCurrentPage();
      }, 1000);
       
  this.submitted = true;
  }
  reloadCurrentPage() {
    window.location.reload();
  }


}
