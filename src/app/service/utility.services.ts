import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UtilityService{

    constructor(private router : Router) {}

    link : boolean = false;

    
    utilityFunc() {
        
        console.log("service 1 loded");
         this.link = true;
         this.router.navigate(["interview-rounds"]);
    }
    utilityFunc1() {
        console.log("service 2 loded");
        
        this.router.navigate(["interview-details"])
        this.link = false;
        //  this.link = true;
    }
}