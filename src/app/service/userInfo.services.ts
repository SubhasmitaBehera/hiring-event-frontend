import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserInfoService{
    private baseUrl = 'http://localhost:8080/user-info/';

    constructor(private http: HttpClient) { }
    
    createUserInfo(userinfo: Object): Observable<Object> {
        
        return this.http.post(`${this.baseUrl}`, userinfo);
    }
    getUserInfo(): any {
        return this.http.get(`${this.baseUrl}`);
    }
}