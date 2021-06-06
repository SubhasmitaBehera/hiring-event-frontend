import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class SkillSetService{
    private baseUrl = 'http://localhost:8080/skills/';

    constructor(private http: HttpClient) { }
  
    getSkillSetList(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
  
    getSkillSet(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`);
    }
  
    createSkillSet(skillset: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, skillset);
    }
  
    updateSkillSet(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value);
    }
  
    deleteSkillSet(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
    }
}