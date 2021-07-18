import { Component, OnInit } from '@angular/core';
import { InterviewRounds } from '../Models/interviewRounds.model';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  interviewRoundTitle = "DETAILS OF INTERVIEW ROUNDS ";

  interviewRound: InterviewRounds = new InterviewRounds();

  submitted: boolean = false;
  boolVar: boolean = false;

  boolVar1: boolean = true;
  boolVar2: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  addAgain() {
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

  save() {
    
  }

  action() {
    this.boolVar = true;
  }
}
