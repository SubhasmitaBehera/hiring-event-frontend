import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UtilityService{
    // id : number;
    constructor(private router : Router) {}

    link : boolean = false;



    
    utilityFunc(id : number) {
        
        console.log("service 1 loded");
         this.link = true;
         this.router.navigate(["interview-rounds", id]);
    }
    utilityFunc1() {
        console.log("service 2 loded");
        
        this.router.navigate(["interview-details"])
        this.link = false;
        //  this.link = true;
    }
}