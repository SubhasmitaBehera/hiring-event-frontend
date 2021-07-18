import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rounds',
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.css']
})
export class RoundsComponent implements OnInit {
  interviewRoundTitle = "DETAILS OF Interview ";
  constructor() { }

  ngOnInit(): void {
  }

}
