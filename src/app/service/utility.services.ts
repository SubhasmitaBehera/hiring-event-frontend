import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UtilityService{

    constructor(private router : Router) {}

    link : boolean = false;

    
    utilityFunc() {
         this.link = true;
         this.router.navigate(["interview-rounds"]);
    }
    utilityFunc1() {
         this.link = false;
         this.router.navigate(["interview-details"])
    }
}