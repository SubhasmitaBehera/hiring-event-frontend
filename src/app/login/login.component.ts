
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Login } from 'src/app/models/Login';
import { AuthGuard } from '../guard/auth.guard';
import { LoginService } from '../service/login.service';
import { RoleService } from '../service/roles.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginModel: Login = new Login();
  isFetching : boolean = false;
  error = null;

  constructor(private loginService: LoginService, private router: Router , private authGuard :AuthGuard) { }

  ngOnInit(): void {
  }
  login(userName: String) {
    this.isFetching = true;
    this.loginService.login(this.loginModel).subscribe((data: any) => {
      console.log(data);
      if (!data.startsWith("Bearer ")) {
        let token = "";
        token = data;
        sessionStorage.setItem('token', token);
        this.router.navigate(["/reset-password", userName])

      }
      if (data.startsWith("Bearer ")) {
        let bearerToken = "";
        bearerToken = data.replace('Bearer ', '');
        console.log(bearerToken);

        sessionStorage.setItem('token', bearerToken);
         this.router.navigate(["/home"]);
        let token = sessionStorage.getItem('token');
    console.log(token, "inside login method the bearer token");

      }
      this.isFetching = false;

    }, error =>{
      this.error = error.message;
    }
    ) ;



  }

}
