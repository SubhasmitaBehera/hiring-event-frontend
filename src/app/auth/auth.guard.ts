import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
// import { JwtHelperService } from '@auth0/angular-jwt';
// import {  JwtHelperService } from '@auth0/angular-jwt';


import { Injectable } from "@angular/core";
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router :Router){}
  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log("token");


      const token = localStorage.getItem('token');

    console.log(token,"token");

    if(token!= null){
      // const helper = new JwtHelperService();
      // if(helper.isTokenExpired(token)){
      //   document.location.href = 'http://localhost:4200';  //login portal url
      //   console.warn("Session expired! Please login again");
      //   return false;

      // }
      // else
      return true;
    }
    else{
      console.warn("Please login to continue...");
        document.location.href = 'http://localhost:4200';  //login portal url

    }
    // if()
  return true;
}

  }


