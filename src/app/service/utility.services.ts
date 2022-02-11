import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AuthGuard } from "../auth/auth.guard";

@Injectable({
    providedIn: 'root'
})
export class UtilityService{
    // id : number;
    token;
    constructor(private router : Router, private authService : AuthGuard) {
        this.token = this.authService.getToken();
    }

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