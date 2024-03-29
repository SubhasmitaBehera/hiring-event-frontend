import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillSet } from 'src/app/Models/skillset.model';
import { LogOutService } from 'src/app/service/logout.service';
import { SkillSetService } from 'src/app/service/skillset.services';

@Component({
  selector: 'app-edit-skill-set',
  templateUrl: './edit-skill-set.component.html',
  styleUrls: ['./edit-skill-set.component.css']
})
export class EditSkillSetComponent implements OnInit {

  boolVar:boolean = false;
  skillset: SkillSet;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router,
    private skillsetService: SkillSetService, private logoutService : LogOutService) { }

  ngOnInit(): void {
    this.skillset = new SkillSet();

    this.id = this.route.snapshot.params['id'];

    this.skillsetService.getSkillSet(this.id)
      .subscribe(data => {
        console.log(data)
        this.skillset = data;
      }, error => console.log(error));
  }
  enable() {
    this.router.navigate(["skill-set"])
  }
  enable1() {
    this.router.navigate(["skill-set/view-skill-set"])
  }

  updateSkillSet() {
    this.skillsetService.updateSkillSet(this.id, this.skillset)
      .subscribe(data => {
        console.log(data);
        this.skillset = new SkillSet();
      }, error => console.log(error));

      this.boolVar=true;
  }
  list(){
    this.router.navigate(['skill-set/view-skill-set']);
  }
  addUser(){
    this.router.navigate(["/create-user"])
  }

}
