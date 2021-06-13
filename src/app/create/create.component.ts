import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
boolVar:boolean=false;
boolVar1:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  enable(){
    this.boolVar=true;
    this.boolVar1=false;
  }
  enable1(){
    this.boolVar1=true;
    this.boolVar=false;
  }

}
