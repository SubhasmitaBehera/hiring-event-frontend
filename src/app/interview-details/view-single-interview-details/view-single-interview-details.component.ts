import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { InterviewDetails } from 'src/app/Models/interviewDetails.model';
import { InterViewDetailsService } from 'src/app/service/interview-details.services';

@Component({
  selector: 'app-view-single-interview-details',
  templateUrl: './view-single-interview-details.component.html',
  styleUrls: ['./view-single-interview-details.component.css']
})
export class ViewSingleInterviewDetailsComponent implements OnInit {
  interviewDetails: InterviewDetails;
  id : number;
  constructor(private route: ActivatedRoute,private interviewDetailsService : InterViewDetailsService,private router: Router) { }

  ngOnInit(): void {
    this.interviewDetails= new InterviewDetails();

    this.id = this.route.snapshot.params['id'];
    
    this.interviewDetailsService.getInterviewDetails(this.id)
      .subscribe(data => {
        console.log(data)
        this.interviewDetails = data;
      }, error => console.log(error));
  }
  
  list(){
    this.router.navigate(['interview-details/view-interview-details']);
  }

}