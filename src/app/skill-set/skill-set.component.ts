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

  constructor(private skillsetService : SkillSetService,private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  addAgain(){
    this.submitted = false;

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
