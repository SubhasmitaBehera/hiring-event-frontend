import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDetails } from 'src/app/Models/jobdetails.model';
import { JobDetailsService } from 'src/app/service/jobdetails.services';

@Component({
  selector: 'app-view-single-job-details',
  templateUrl: './view-single-job-details.component.html',
  styleUrls: ['./view-single-job-details.component.css']
})
export class ViewSingleJobDetailsComponent implements OnInit {
  jobdetail: JobDetails;
  id : number;

  constructor(private route: ActivatedRoute,private jobDetailsService : JobDetailsService,private router: Router) { }

  ngOnInit(): void {
    this.jobdetail= new JobDetails();

    this.id = this.route.snapshot.params['id'];
    
    this.jobDetailsService.getSingleJobDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.jobdetail = data;
      }, error => console.log(error));
  }
  
  list(){
    this.router.navigate(['job-details/view-job-details']);
  }
  enable() {
    this.router.navigate(["job-details"])
    // this.boolVar1 = true;
    // this.boolVar2 = false;
  }
  enable1() {
    this.router.navigate(["job-details/view-job-details"])
    // this.boolVar2 = true;
    // this.boolVar1 = false;
  }
}
