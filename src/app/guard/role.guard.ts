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

  constructor(private authService: AuthGuard, private roleService: RoleService) { }

  canActivate = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree =>{
    let role: string;

    role = sessionStorage.getItem('role');
    // this.roleService
    //   .getUserDetails().subscribe((data) => {
    //     console.log("data ", data);
    //     data.roles = "User";
    //     console.log("data.roles ", data.roles);
    //     role = data.roles;
    //     console.log(role, " role");
    var roleMatches;
    const expectedRoles = route.data.expectedRoles;
    console.log("role inside canActivate ", role);
    console.log(sessionStorage.getItem('role'));
    let flag : boolean = false;
      for(let i = 0 ; i < expectedRoles.length ; i++){
        if(expectedRoles[i]=== role){
          roleMatches =i;
          flag = true;
        }

      }
      if (flag === false)
      roleMatches = -1;
    console.log(roleMatches , " roleMatches");

    return roleMatches < 0 ? false : true;
  }

}
