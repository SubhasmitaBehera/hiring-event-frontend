import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterviewDetails } from '../Models/interviewDetails.model';
import { InterViewDetailsService } from '../service/interview-details.services';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {

  titleInterviewDetails = "SET INTERVIEW DETAILS";
  submitted : boolean = false;

  interviewDetails : InterviewDetails = new InterviewDetails();

  boolVar1: boolean = true;
  boolVar2: boolean = false;

  constructor(private interviewDetailsService : InterViewDetailsService,private route : ActivatedRoute) { }

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
    this.interviewDetailsService
    .createInterviewDetails(this.interviewDetailsService).subscribe((data) => {
      console.log(data);
      this.interviewDetails = new InterviewDetails();
    },
      (error) => console.log(error));

  this.submitted = true;
  }

}
