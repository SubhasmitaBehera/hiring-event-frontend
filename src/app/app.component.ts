import { Component } from '@angular/core';
import { UtilityService } from './service/utility.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hiring-event';
  

  constructor(public utilityService : UtilityService) { }
  ngOnInit(): void{
  }
  
}
