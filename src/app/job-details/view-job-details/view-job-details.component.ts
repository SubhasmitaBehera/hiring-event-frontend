import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobDetails } from 'src/app/Models/jobdetails.model';
import { JobDetailsService } from 'src/app/service/jobdetails.services';

@Component({
  selector: 'app-view-job-details',
  templateUrl: './view-job-details.component.html',
  styleUrls: ['./view-job-details.component.css']
})
export class ViewJobDetailsComponent implements OnInit {

  jobdetails: Observable<JobDetails[]>;
  boolVar : boolean = false;
  id:number;
  
  constructor(private route: ActivatedRoute, private jobDetailsService : JobDetailsService,private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.jobdetails = this.jobDetailsService.getJobDetailsList();
  }

  deleteJobDetails(id: number) {
    this.boolVar = confirm("Are You Sure to Delete ?");
    if (this.boolVar === true) {
      this.jobDetailsService.deleteJobDetails(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  viewJobDetails(id : number) {
    this.router.navigate(['job-details/view-job-details', id]);
  }

  updateJobDetails(id: number) {
    this.router.navigate(['job-details/edit-job-details', id]);
  }
}
