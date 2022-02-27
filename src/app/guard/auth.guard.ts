import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import {  JwtHelperService } from '@auth0/angular-jwt';

import { Injectable } from '@angular/core';
import { RoleService } from '../service/roles.services';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  token = '';
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    console.log('token');
    this.token = sessionStorage.getItem('token');
    console.log(this.token, 'token');

    console.log("token");
    this.token = sessionStorage.getItem('token');
    // const bearerToken: any = sessionStorage.getItem('BearerToken');
    // console.log("BearerToken", bearerToken);

    console.log(this.token, "token");

//     if (this.token != null) {
//       const helper = new JwtHelperService();
//       console.log(helper);
//       if (this.token.startsWith("Bearer ")) {
//         if (helper.isTokenExpired(this.token)) {
//           this.router.navigate(['/login']);
//           console.warn("Session expired! Please login again");
//           return false;
//         }
//         else
//           return true;
//       }

//       else
//         return true;
//     }

//     else{
//   console.warn("Please login to continue...");
//   this.router.navigate(['/login'])
// }
// return true;

    if (this.token != "undefined" && this.token != null) {

      // const helper = new JwtHelperService();
      // if(helper.isTokenExpired(token)){
      //   document.location.href = 'http://localhost:4200';  //login portal url
      //   console.warn("Session expired! Please login again");
      //   return false;

      // }
      // else
      return true;
    } else {

      console.log('Please login to continue...');
      document.location.href = 'http://localhost:4300'; //login portal url
    }
    // if()
    return true;
  }

  getToken() {
    return this.token;
  }
  haveAccess(){
    var loginToken = this.getToken();
    var extractedToken = loginToken.split('.')[1];
    var atobData = atob(extractedToken);
    var finalData = JSON.parse(atobData);
    console.log(finalData);

  }




}
