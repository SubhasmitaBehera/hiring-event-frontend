import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobdetails = "JOB DETAILS PAGE";

  submitted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  check(){
    this.submitted = true;
  }

  addAgain(){
    this.submitted = false;
  }

}
