import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SkillSet } from '../Models/skillset.model';
import { SkillSetService } from '../service/skillset.services';

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
  titleskillset = "SET YOUR SKILLS";
  submitted : boolean = false;

  skillset : SkillSet = new SkillSet();

  boolVar1: boolean = true;
  boolVar2: boolean = false;

  constructor(private skillsetService : SkillSetService,private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addAgain(){
    this.submitted = false;

  }
  enable() {
    this.boolVar1 = true;
    this.boolVar2 = false;
  }
  enable1() {
    this.boolVar2 = true;
    this.boolVar1 = false;
  }

  save(){
    this.skillsetService
    .createSkillSet(this.skillset).subscribe((data) => {
      console.log(data);
      this.skillset = new SkillSet();
    },
      (error) => console.log(error));

  this.submitted = true;
  }

}
