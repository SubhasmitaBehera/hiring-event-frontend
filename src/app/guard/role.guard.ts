import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import { RoleService } from '../service/roles.services';
import { AuthGuard } from './auth.guard';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
   role :any;

  constructor(private authService: AuthGuard , private roleService : RoleService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.roleService
          .getUserDetails().subscribe((data) => {
            // console.log("data ", data);
            // console.log("data.roles ", data.roles);
            // this.role = data.roles;
             this.role = "User";

          },
            (error) => console.log(error));
  const expectedRoles = route.data.expectedRoles;
  console.log("role inside canActivate ", this.role);
  var roleMatches = expectedRoles.findIndex(r => this.role);
  return roleMatches < 0 ? false : true;
    // return this.isAuthorized(route);
  }

  // private async isAuthorized(route: ActivatedRouteSnapshot) : Promise<boolean> {
  //   //  const roles = ["ADMIN", "USER", "VISITOR", "HR", "INTERVIEWER", "CANDIDATE"];

  //   // const roleMatches = expectedRoles.findIndex(r => this.role.indexOf(r) !== -1);
  //   console.log(this.role);

  //   // let role = this.getRole();
  //   // console.log(this.getRole());

  //   const expectedRoles = route.data.expectedRoles;
  //   console.log("expectedRoles ", expectedRoles);
  //   console.log("role ", this.role);
  //   var roleMatches = expectedRoles.findIndex(r => this.role);
  //   console.log("roleMatches ", roleMatches);
  //   // return this.role == expectedRoles ? true : false;
  //   return roleMatches < 0 ? false : true;

  //   // return false;

  // }
   // role:any;
  // getRole(){
  //   this.roleService
  //     .getUserDetails().subscribe((data) => {
  //       console.log("data ", data);
  //       console.log("data.roles ", data.roles);
  //       // this.role = data.roles;
  //        this.role = "Admin";

  //     },
  //       (error) => console.log(error));

  //       console.log(this.role);

  //       return this.role;
  // }


}
