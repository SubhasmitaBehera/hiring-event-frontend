import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JobDetails } from 'src/app/Models/jobdetails.model';
import { SkillSet } from 'src/app/Models/skillset.model';
import { JobDetailsService } from 'src/app/service/jobdetails.services';
import { SkillSetService } from 'src/app/service/skillset.services';

@Component({
  selector: 'app-edit-job-details',
  templateUrl: './edit-job-details.component.html',
  styleUrls: ['./edit-job-details.component.css']
})
export class EditJobDetailsComponent implements OnInit {
  skillsets: Observable<SkillSet[]>;

  boolVar:boolean = false;
  jobdetails: JobDetails;
  id: number;

  form: FormGroup;
  constructor(private route: ActivatedRoute,
     private router: Router,private skillSetService : SkillSetService,
     private jobDetailsService: JobDetailsService,
     private fb:FormBuilder) {

      this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
      })
      }

  ngOnInit(): void {
    this.jobdetails = new JobDetails();
    this.id = +this.route.snapshot.params['id'];
    this.reloadData();
    this.jobDetailsService.getJobDetails(this.id)
    .subscribe(data => {
      console.log(data)
      this.jobdetails = data;
    }, error => console.log(error));

  }


  reloadData() {
    this.skillsets = this.skillSetService.getSkillSetList();
  }

  updateJobDetails() {
    this.jobDetailsService.updateJobDetails(this.id, this.jobdetails)
      .subscribe(data => {
        console.log(data);
        this.jobdetails = new JobDetails();
      }, error => console.log(error));

      this.boolVar=true;
  }
  list(){
    this.router.navigate(['job-details/view-job-details']);
  }
  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitForm() {
    console.log(this.form.value);
  }
 

}
