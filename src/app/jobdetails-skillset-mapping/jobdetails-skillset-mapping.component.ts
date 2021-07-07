import { Component, OnInit } from '@angular/core';
import { JobDetailsSkillSetMapping } from '../Models/jobdetailsSkillSetMapping.model';

import { JobdetailsSkillSetmappingService } from 'src/app/service/jobdetailsSkillSetMapping.services';
import { Observable } from 'rxjs';
import { SkillSet } from '../Models/skillset.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SkillSetService } from '../service/skillset.services';
import * as $ from 'jquery';

@Component({
  selector: 'app-jobdetails-skillset-mapping',
  templateUrl: './jobdetails-skillset-mapping.component.html',
  styleUrls: ['./jobdetails-skillset-mapping.component.css']
})
export class JobdetailsSkillsetMappingComponent implements OnInit {
  boolVar : boolean = true;
  jobdetailsSkillSetMapping: JobDetailsSkillSetMapping = new JobDetailsSkillSetMapping();
  skillsets: Observable<SkillSet[]>;
  form: FormGroup;
  id: number;
  skillset : SkillSet = new SkillSet();

  constructor(private jobdetailsSkillSetmappingService: JobdetailsSkillSetmappingService,
    private fb: FormBuilder, private route: ActivatedRoute, private skillSetService: SkillSetService
  ) {
    this.form = this.fb.group({
      checkArray: this.fb.array([], [Validators.required])
    })
  }

  ngOnInit(): void {
    
    this.id = +this.route.snapshot.params['id'];
    this.reloadData();

  }
  reloadData() {
    this.skillsets = this.skillSetService.getSkillSetList();
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
  isSubmitFormCalled = false;
  submitForm() {
    
    let skillSet: SkillSet[]=[];
    for (let i =0 ; i< this.form.value.checkArray.length;i++) {
      skillSet.push( {'id':this.form.value.checkArray[i],'skillName':null,'description':null});

    }
    
    this.jobdetailsSkillSetMapping.skills= skillSet;

      this.jobdetailsSkillSetMapping.jobId = +this.route.snapshot.params['id'];
      this.jobdetailsSkillSetmappingService
        .createJobDetailsSkillSetMapping(this.jobdetailsSkillSetMapping).subscribe((data) => {
          console.log("data from post mapping : " );
          console.log(data);
          
          this.jobdetailsSkillSetMapping = new JobDetailsSkillSetMapping();
        },
          (error) => console.log(error));

          this.isSubmitFormCalled = true;


    //  this.boolVar = false;     
    
    // console.log(+this.route.snapshot.params['id']);

    // console.log(this.form.value);

    
    if(this.isSubmitFormCalled == true){
      this.checkedOnRefresh();
    }
  }

  checkedOnRefresh(){      

      this.jobdetailsSkillSetmappingService.getSkillSetIds(this.jobdetailsSkillSetMapping.jobId).subscribe((data) => {
          console.log("from get mapping");
          console.log(data);
          this.jobdetailsSkillSetMapping = data;
      },(error)=> console.log(error));
      
      // console.log(this.form.value.checkArray);

      // for(let i of this.jobdetailsSkillSetMapping.skills ){

      //   if(i.id == this.form.value.checkArray){

      //   }
      // }
    }
    

}
