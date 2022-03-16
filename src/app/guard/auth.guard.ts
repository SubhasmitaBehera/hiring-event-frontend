import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
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
    this.token = sessionStorage.getItem('token');
    console.log(this.token, "token");


    if (this.token != "undefined" && this.token != null) {
      const helper = new JwtHelperService();
      if (helper.isTokenExpired(this.token)) {
    sessionStorage.removeItem('token');

        this.router.navigate(['/login']);
        console.warn("Session expired! Please login again");
        return false;
      }

      return true;
    } else {

      this.router.navigate(['/login']);
      console.log('Please login to continue...');
      return false;

    }
  }

  getToken() {
    return this.token;
  }

}
