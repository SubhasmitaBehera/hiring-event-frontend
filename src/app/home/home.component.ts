import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Hiring-service v2.0';
  isDropdownOpen=false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  onLoadSkillSet() {
   this.router.navigate(['/skill-set'])
  }
  onLoadJobDetails() {
    this.router.navigate(['/job-details'])
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
