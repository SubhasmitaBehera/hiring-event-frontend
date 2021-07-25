import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserInfoService{
    private baseUrl = 'http://localhost:8080/user-info/';

    constructor(private http: HttpClient) { }
    
    createUserInfo(userinfo: Object): any {
        
        return this.http.post(`${this.baseUrl}`, userinfo);
    }
    getUserInfoList(): any {
        return this.http.get(`${this.baseUrl}`);
    }
    getUserInfo(id: number): any {
        return this.http.get(`${this.baseUrl}/${id}`);
      }
    
      updateUserInfo(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
      }
    
      deleteUserInfo(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
      }
}