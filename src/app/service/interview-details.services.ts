import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class InterViewDetailsService{
    private baseUrl = 'http://localhost:8080/interview-status/';

    constructor(private http: HttpClient) { }
    
    getInterviewDetailsList(): any {
        return this.http.get(`${this.baseUrl}`);
      }
      
    
      getInterviewDetails(id: number): any {
        return this.http.get(`${this.baseUrl}/${id}`);
      }
    
      createInterviewDetails(interviewDetails: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, interviewDetails);
      }
      updateInterviewDetails(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
      }
    
      deleteInterviewDetails(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
      }
}