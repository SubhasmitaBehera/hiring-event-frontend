import { Component, OnInit } from '@angular/core';
import { InterviewRounds } from 'src/app/Models/interviewRounds.model';

@Component({
  selector: 'app-edit-rounds',
  templateUrl: './edit-rounds.component.html',
  styleUrls: ['./edit-rounds.component.css']
})
export class EditRoundsComponent implements OnInit {
  interviewRound : InterviewRounds;
  constructor() { }

  ngOnInit(): void {
  }

}
