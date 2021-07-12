import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  titleUserInfo = "SET USER INFO"
  submitted : boolean = false;

  // skillset : SkillSet = new SkillSet();

  boolVar1: boolean = true;
  boolVar2: boolean = false;

  constructor() { }

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

  // save(){
  //   this.skillsetService
  //   .createSkillSet(this.skillset).subscribe((data) => {
  //     console.log(data);
  //     this.skillset = new SkillSet();
  //   },
  //     (error) => console.log(error));

  // this.submitted = true;
  // }


}
