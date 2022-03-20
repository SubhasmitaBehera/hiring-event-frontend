import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { LogOutService } from '../service/logout.service';
import { RoleService } from '../service/roles.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Hiring-service v2.0';
  isDropdownOpen=false;

  constructor(private router : Router, private logoutService : LogOutService , private authGuard : AuthGuard) { }

  ngOnInit(): void {

  }


  onLoadSkillSet() {
   this.router.navigate(['/skill-set'])
  }
  onLoadJobDetails() {
    this.router.navigate(['/job-details'])
  }
}
