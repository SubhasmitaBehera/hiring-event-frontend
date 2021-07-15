import { HttpClient } from "@angular/common/http";

export class InterViewDetailsService{
    private baseUrl = 'http://localhost:8080/user-info/';

    constructor(private http: HttpClient) { }
    
    createUserInfo(userinfo: Object): any {
        
        return this.http.post(`${this.baseUrl}`, userinfo);
    }
    getUserInfo(): any {
        return this.http.get(`${this.baseUrl}`);
    }
}