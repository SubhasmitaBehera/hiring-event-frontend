import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SkillSet } from 'src/app/Models/skillset.model';
import { SkillSetService } from 'src/app/service/skillset.services';

@Component({
  selector: 'app-view-skill-set',
  templateUrl: './view-skill-set.component.html',
  styleUrls: ['./view-skill-set.component.css']
})
export class ViewSkillSetComponent implements OnInit {

  skillsets: Observable<SkillSet[]>;
  boolVar : boolean = false;
  id:number;
  
  constructor(private skillSetService : SkillSetService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.reloadData();
  }

  reloadData() {
    this.skillsets = this.skillSetService.getSkillSetList();
  }

  deleteSkillSet(id: number) {
    this.boolVar = confirm("Are You Sure to Delete ?");
    if (this.boolVar === true) {
      this.skillSetService.deleteSkillSet(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  updateSkillSet(id: number) {
    this.router.navigate(['skill-set/edit-skill-set', id]);
  }

}
