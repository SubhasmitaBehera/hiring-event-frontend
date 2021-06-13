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
    
    this.jobDetailsService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.jobdetail = data;
      }, error => console.log(error));
  }
  
  list(){
    this.router.navigate(['job-details/view-job-details']);
  }

}
