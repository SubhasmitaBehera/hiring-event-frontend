import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobDetails } from 'src/app/Models/jobdetails.model';
import { JobDetailsService } from 'src/app/service/jobdetails.services';

@Component({
  selector: 'app-edit-job-details',
  templateUrl: './edit-job-details.component.html',
  styleUrls: ['./edit-job-details.component.css']
})
export class EditJobDetailsComponent implements OnInit {

  boolVar:boolean = false;
  jobdetails: JobDetails;
  id: number;
  sub :any;

  constructor(private route: ActivatedRoute, private router: Router,
    private jobDetailsService: JobDetailsService) 
    
    {
      this.jobdetails = new JobDetails();

    // this.sub = this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   console.log("id is "+this.id);
      this.id = this.route.snapshot.params['id'];
    
    console.log("some msg"+this.id);
    
    this.jobDetailsService.getJobDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.jobdetails = data;
      }, error => console.log(error));

      
  }


  ngOnInit(): void {
    
      
  }

  updateJobDetails() {
    this.jobDetailsService.updateJobDetails(this.id, this.jobdetails)
      .subscribe(data => {
        console.log(data);
        this.jobdetails = new JobDetails();
        this.list();
      }, error => console.log(error));

      this.boolVar=true;
  }
  list(){
    this.router.navigate(['job-details/view-job-details']);
  }

}
