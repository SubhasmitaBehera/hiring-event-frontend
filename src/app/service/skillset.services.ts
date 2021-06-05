import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class SkillSetService{
    private baseUrl = 'http://localhost:8080/skills/';

    constructor(private http: HttpClient) { }
  
    // getEmployeesList(): Observable<any> {
    //   return this.http.get(`${this.baseUrl}`);
    // }
  
    // getEmployee(uid: string): Observable<any> {
    //   return this.http.get(`${this.baseUrl}/${uid}`);
    // }
  
    createSkillSet(skillset: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, skillset);
    }
  
    // updateEmployee(uid: string, value: any): Observable<Object> {
    //   return this.http.put(`${this.baseUrl}/${uid}`, value);
    // }
  
    // deleteEmployee(uid: string): Observable<any> {
    //   return this.http.delete(`${this.baseUrl}/${uid}`, { responseType: 'text' });
    // }
}