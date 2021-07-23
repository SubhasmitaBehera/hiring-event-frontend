import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { InterviewDetails } from 'src/app/Models/interviewDetails.model';
import { InterviewRounds } from 'src/app/Models/interviewRounds.model';
import { InterviewRoundService } from 'src/app/service/interview-round.services';

@Component({
  selector: 'app-view-multiple-rounds',
  templateUrl: './view-multiple-rounds.component.html',
  styleUrls: ['./view-multiple-rounds.component.css']
})
export class ViewMultipleRoundsComponent implements OnInit {
  interviewRounds: Observable<InterviewRounds[]>;
  interviewDetails : InterviewDetails = new InterviewDetails();
  id : number;
  constructor(private interviewRoundService : InterviewRoundService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.reloadData();
  }


  reloadData() {
    this.interviewRounds = this.interviewRoundService.getInterviewRoundList();
  }
}
