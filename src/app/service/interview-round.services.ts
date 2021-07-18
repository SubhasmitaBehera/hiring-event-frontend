import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InterviewRoundService{
    private baseUrl = 'http://localhost:8080/interview-round/';

    constructor(private http: HttpClient) { }
    
      getInterviewRoundList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
      }
    
      getInterviewRound(id: number): Observable<any> {
        console.log(id);
        return this.http.get(`${this.baseUrl}/${id}`);
        
      }
    
      createInterviewRound(jobdetails: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, jobdetails);
      }
    
      updateInterviewRound(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
      }
    
      deleteInterviewRound(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
      }

}