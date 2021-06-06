import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private jobDetailsservice : JobDetailsService,private router: Router) { }

  ngOnInit(): void {
  }

  reloadData() {
    this.jobdetails = this.jobDetailsservice.getJobDetailsList();
  }

  deleteSkillSet(id: number) {
    this.boolVar = confirm("Are You Sure to Delete ?");
    if (this.boolVar === true) {
      this.jobDetailsservice.deleteJobDetails(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  updateSkillSet(id: number) {
    this.router.navigate(['edit-job-details', id]);
  }


}
