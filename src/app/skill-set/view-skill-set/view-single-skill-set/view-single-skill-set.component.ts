import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SkillSet } from 'src/app/Models/skillset.model';
import { SkillSetService } from 'src/app/service/skillset.services';

@Component({
  selector: 'app-view-single-skill-set',
  templateUrl: './view-single-skill-set.component.html',
  styleUrls: ['./view-single-skill-set.component.css']
})
export class ViewSingleSkillSetComponent implements OnInit {
  skillset: SkillSet;
  id : number;
  constructor(private route: ActivatedRoute,private skillSetService : SkillSetService,private router: Router) { }

  ngOnInit(): void {
    this.skillset= new SkillSet();

    this.id = this.route.snapshot.params['id'];
    
    this.skillSetService.getSingleSkillSet(this.id)
      .subscribe(data => {
        console.log(data)
        this.skillset = data;
      }, error => console.log(error));
  }
  
  list(){
    this.router.navigate(['skill-set/view-skill-set']);
  }

}
