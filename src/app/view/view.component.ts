import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobDetails } from '../Models/jobdetails.model';
import { ViewJobDetailsComponent } from '../job-details/view-job-details/view-job-details.component';
import { JobDetailsService } from '../service/jobdetails.services';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  boolVar : boolean = true;
  boolVar1 : boolean = false;
  
  
  constructor() { }

  ngOnInit(): void {
    
  }
  enable(){
    this.boolVar=true;
    this.boolVar1=false;
  }
  enable1(){
    this.boolVar1=true;
    this.boolVar=false;
  }

}
