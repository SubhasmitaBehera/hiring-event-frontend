import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InterviewDetails } from 'src/app/Models/interviewDetails.model';
import { InterViewDetailsService } from 'src/app/service/interview-details.services';

@Component({
  selector: 'app-view-interview-details',
  templateUrl: './view-interview-details.component.html',
  styleUrls: ['./view-interview-details.component.css']
})
export class ViewInterviewDetailsComponent implements OnInit {
  interviewDetails: Observable<InterviewDetails[]>;
  boolVar : boolean = false;
  id:number;
  constructor(private interviewDetailsService : InterViewDetailsService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.interviewDetails = this.interviewDetailsService.getInterviewDetailsList();
  }

  viewInterviewDetails(id: number) {
    this.router.navigate(['interview-details/view-single-interview-details', id]);
  }
}
