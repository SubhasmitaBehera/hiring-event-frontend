import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InterviewDetails } from '../Models/interviewDetails.model';
import { JobDetails } from '../Models/jobdetails.model';
import { UserInfo } from '../Models/userinfo.model';
import { UserType } from '../Models/userType.model';
import { InterViewDetailsService } from '../service/interview-details.services';
import { JobDetailsService } from '../service/jobdetails.services';
import { UserInfoService } from '../service/userInfo.services';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {

  titleInterviewDetails = "SET INTERVIEW DETAILS";
  submitted: boolean = false;
  jobdetails: Observable<JobDetails[]>;
  userInfos: Observable<UserInfo[]>;
  candidate = UserType[0];

  id: number;

  interviewDetails: InterviewDetails = new InterviewDetails();

  boolVar1: boolean = true;
  boolVar2: boolean = false;

  constructor(private interviewDetailsService: InterViewDetailsService,
    private route: ActivatedRoute, private jobDetailsService: JobDetailsService,
    private userInfoService: UserInfoService) {

  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    console.log(UserType);
    console.log(this.candidate);
    this.reloadData();
  }


  reloadData() {
    this.jobdetails = this.jobDetailsService.getJobDetailsList();
    this.userInfos = this.userInfoService.getUserInfo();
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
    this.interviewDetailsService
      .createInterviewDetails(this.interviewDetails).subscribe((data) => {
        console.log(data);
        this.interviewDetails = new InterviewDetails();
      },
        (error) => console.log(error));

    this.submitted = true;
  }


}
