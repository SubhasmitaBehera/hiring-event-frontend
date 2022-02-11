import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilityService } from './service/utility.services';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hiring-event';

  token:string;
  constructor(public utilityService : UtilityService , private route : ActivatedRoute) { }
  ngOnInit(): void{
    this.route.queryParams
    .subscribe(params => {
      console.log("query string",params);
      if(params.token!=null)
       this.token = params.token;
      sessionStorage.setItem('token', this.token);
      console.log("get token",sessionStorage.getItem('token'));

      console.log(this.token);
    });

  }
}
