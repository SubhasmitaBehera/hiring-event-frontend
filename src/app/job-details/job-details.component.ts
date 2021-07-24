import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetails } from '../Models/jobdetails.model';
import { JobDetailsService } from '../service/jobdetails.services';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {
  jobdetailstitle = "DETAILS OF JOB";

  jobdetails: JobDetails = new JobDetails();

  submitted: boolean = false;
  boolVar: boolean = false;

  boolVar1: boolean = true;
  boolVar2: boolean = false;
  
  constructor(private jobDetailsService: JobDetailsService,private  router : Router) { }

  ngOnInit(): void {
  }

  addAgain() {
    this.submitted = false;
  }
  enable() {
    this.router.navigate(["job-details"])
    // this.boolVar1 = true;
    // this.boolVar2 = false;
  }
  enable1() {
    this.router.navigate(["job-details/view-job-details"])
    this.boolVar2 = true;
    this.boolVar1 = false;
  }

  save() {
    this.jobDetailsService
      .createJobDetails(this.jobdetails).subscribe((data) => {
        console.log(data);
        this.jobdetails = new JobDetails();
      },
        (error) => console.log(error));

    this.submitted = true;
  }
}
