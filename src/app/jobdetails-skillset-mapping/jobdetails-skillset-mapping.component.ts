import { Component, OnInit } from '@angular/core';
import { JobDetailsSkillSetMapping } from '../Models/jobdetailsSkillSetMapping.model';
import { JobdetailsSkillSetmappingService } from 'src/app/service/jobdetailsSkillSetMapping.services';
import { SkillSet } from '../Models/skillset.model';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SkillSetService } from '../service/skillset.services';

@Component({
  selector: 'app-jobdetails-skillset-mapping',
  templateUrl: './jobdetails-skillset-mapping.component.html',
  styleUrls: ['./jobdetails-skillset-mapping.component.css']
})
export class JobdetailsSkillsetMappingComponent implements OnInit {
  jobdetailsSkillSetMapping: JobDetailsSkillSetMapping = new JobDetailsSkillSetMapping();
  boolVar: boolean = false;
  skillsets: SkillSet[];
  form: FormGroup;
  id: number;
  skillset: SkillSet = new SkillSet();
  enable1: number[] = [];
  enable: SkillSet[] = [];

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
    this.checkedOnRefresh();
  }

  reloadData() {
    this.skillsets = this.skillSetService.getSkillSetList();
  }

  onCheckboxChange(e) {
    // let checkArray: FormArray = this.form.get('checkArray') as FormArray;
    if (e.target.checked) {
      this.form.value.checkArray.push(+e.target.value);
      console.log(this.form.value.checkArray);

    }
    if (!e.target.checked) {
      console.log("e.target.value");
      console.log(e.target.value);
      this.form.value.checkArray.forEach((element, index) => {
        if (element == e.target.value) this.form.value.checkArray.splice(index, 1);
      });
      console.log(this.form.value.checkArray);
    }
  }
  reloadCurrentPage() {
    window.location.reload();

  }
  submitForm() {
    console.log(this.enable1);
    console.log(this.form.value.checkArray);
    let skillSet: SkillSet[] = [];
    for (let i = 0; i < this.form.value.checkArray.length; i++) {
      skillSet.push({ 'id': this.form.value.checkArray[i], 'skillName': null, 'description': null });
    }
    this.jobdetailsSkillSetMapping.skills = skillSet;
    this.jobdetailsSkillSetMapping.jobId = +this.route.snapshot.params['id'];
    this.jobdetailsSkillSetmappingService
      .createJobDetailsSkillSetMapping(this.jobdetailsSkillSetMapping).subscribe((data) => {
        console.log("data from post mapping : ");
        console.log(data);
        this.jobdetailsSkillSetMapping = new JobDetailsSkillSetMapping();
      },
        (error) => console.log(error));

        setTimeout(() => {
          this.reloadCurrentPage()
        }, 2500);
        // this.reloadCurrentPage();
        // this.refreshComponent();
        this.boolVar= true;
  }
  checkedOnRefresh() {
    this.jobdetailsSkillSetMapping.jobId = +this.route.snapshot.params['id'];
    this.jobdetailsSkillSetmappingService.getSkillSetIds(this.jobdetailsSkillSetMapping.jobId).subscribe((data) => {
      console.log("from get mapping");
      console.log(data);
      this.enable = data.enabled;
      for (let i of this.enable) {
        this.enable1.push(i.id)
      }
      this.jobdetailsSkillSetMapping = data;
      for (let i = 0; i < this.enable1.length; i++) {
        this.form.value.checkArray[i] = this.enable1[i];
      }
      // console.log(this.form.value.checkArray);
    }, (error) => console.log(error));
  }

  check(e) {   //9 , 1
    for (let j = 0; j < this.enable1.length; j++) {
      if (e == this.enable1[j]) {
        return this.enable1[j];
      }
    }
  }
}
