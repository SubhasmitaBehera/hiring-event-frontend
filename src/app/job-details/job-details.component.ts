import { Component, OnInit } from '@angular/core';
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



  constructor(private jobDetailsService: JobDetailsService) { }

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
    this.jobDetailsService
      .createJobDetails(this.jobdetails).subscribe((data) => {
        console.log(data);
        this.jobdetails = new JobDetails();
      },
        (error) => console.log(error));

    this.submitted = true;
  }
}
