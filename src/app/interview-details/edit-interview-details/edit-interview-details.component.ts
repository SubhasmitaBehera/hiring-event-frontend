import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InterviewDetails } from 'src/app/Models/interviewDetails.model';
import { JobDetails } from 'src/app/Models/jobdetails.model';
import { UserInfo } from 'src/app/Models/userinfo.model';
import { UserType } from 'src/app/Models/userType.model';
import { InterViewDetailsService } from 'src/app/service/interview-details.services';
import { JobDetailsService } from 'src/app/service/jobdetails.services';
import { UserInfoService } from 'src/app/service/userInfo.services';

@Component({
  selector: 'app-edit-interview-details',
  templateUrl: './edit-interview-details.component.html',
  styleUrls: ['./edit-interview-details.component.css']
})
export class EditInterviewDetailsComponent implements OnInit {

  boolVar:boolean = false;
  interviewDetail: InterviewDetails;
  id: number;

  jobdetails: Observable<JobDetails[]>;

  userInfos: Observable<UserInfo[]>;
  candidate = UserType[0];

  constructor(private route: ActivatedRoute, private router: Router,
    private interviewDetailsService: InterViewDetailsService,private jobDetailsService: JobDetailsService,
    private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.interviewDetail = new InterviewDetails();
    this.id = +this.route.snapshot.params['id'];
    this.reloadData();
    this.interviewDetailsService.getInterviewDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.interviewDetail = data;
      }, error => console.log(error));
  }

  reloadData() {
    this.jobdetails = this.jobDetailsService.getJobDetailsList();
    this.userInfos = this.userInfoService.getUserInfoList();
  }
  enable() {
    this.router.navigate(["interview-details"]);
  }
  enable1() {
    this.router.navigate(["interview-details/view-interview-details"]);
  }

  updateInterviewDetails() {
    this.interviewDetailsService.updateInterviewDetails(this.id, this.interviewDetail)
      .subscribe(data => {
        console.log(data);
        this.interviewDetail = new InterviewDetails();
      }, error => console.log(error));

      this.boolVar=true;
  }
  list(){
    this.router.navigate(['interview-details/view-interview-details']);
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('bearerToken');
    this.router.navigate(["/login"])

  }
  addUser(){
    this.router.navigate(["/create-user"])
  }

}
