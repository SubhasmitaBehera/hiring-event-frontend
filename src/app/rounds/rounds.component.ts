import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InterviewDetails } from '../Models/interviewDetails.model';
import { InterviewRounds } from '../Models/interviewRounds.model';
import { UserInfo } from '../Models/userinfo.model';
import { UserType } from '../Models/userType.model';
import { InterViewDetailsService } from '../service/interview-details.services';
import { InterviewRoundService } from '../service/interview-round.services';
import { UserInfoService } from '../service/userInfo.services';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  interviewRoundTitle = "DETAILS OF INTERVIEW ROUNDS ";

  interviewDetails: InterviewDetails = new InterviewDetails();
  interviewDetailsArr: Observable<InterviewDetails[]>;

  interviewRound: InterviewRounds = new InterviewRounds();
  userInfos: Observable<UserInfo[]>;
  candidate = UserType[0];
  interviewer = UserType[1];

  submitted: boolean = false;
  boolVar: boolean = false;

  boolVar1: boolean = true;
  boolVar2: boolean = false;


  constructor(private interviewRoundService : InterviewRoundService,private userInfoService: UserInfoService,
    private interviewDetailsService : InterViewDetailsService) { }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.userInfos = this.userInfoService.getUserInfo();
    this.interviewDetailsArr = this.interviewDetailsService.getInterviewDetailsList();
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
    this.interviewRoundService
      .createInterviewRound(this.interviewRound).subscribe((data) => {
        console.log(data);
        this.interviewRound = new InterviewRounds();
      },
        (error) => console.log(error));

    this.submitted = true;
  }

  action() {
    this.boolVar = true;
  }
}
