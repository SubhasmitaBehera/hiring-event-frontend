import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Hiring-service v2.0';

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  onLoadSkillSet() {
   this.router.navigate(['/view'])
  }
  onLoadJobDetails() {
    this.router.navigate(['/create'])
  }
}
