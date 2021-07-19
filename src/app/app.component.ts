import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hiring-event';
  // links:any[]=[];
  link:boolean=false;
  ngOnInit(): void{

    console.log(this.link);
  }
  
}
