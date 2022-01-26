import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  interviewRound: InterviewRounds;
  interviewDetails : InterviewDetails = new InterviewDetails();
  id : number;
  boolVar: boolean = false;
  modalFlag:boolean=false;
  constructor(private interviewRoundService : InterviewRoundService,
    private route : ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.reloadData();
  }

  viewSingleRoundModal(id : any){
this.interviewRound= new InterviewRounds();
this.interviewRound.id = id;
    var index  = id;
console.log(id);
console.log(this.interviewRound.id);
this.interviewRoundService.getInterviewRound(this.interviewRound.id)
      .subscribe(data => {
        console.log(data)
        this.interviewRound = data;
      }, error => console.log(error));

      // this.modalFlag=true;
  }
  reloadData() {
    this.interviewRounds = this.interviewRoundService.getInterviewRoundList();
  }
}
