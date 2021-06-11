import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Params } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JobDetailsService{
    private baseUrl = 'http://localhost:8080/job-details/';

    constructor(private http: HttpClient) { }
    
      getJobDetailsList(): Observable<any> {
        return this.http.get(`${this.baseUrl}`);
      }
    
      getJobDetails(id: number): Observable<any> {
        console.log(id);
        return this.http.get(`${this.baseUrl}/${id}`);
        
      }
    
      createJobDetails(jobdetails: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, jobdetails);
      }
    
      updateJobDetails(id: number, value: any): Observable<Object> {
        return this.http.put(`${this.baseUrl}/${id}`, value);
      }
    
      deleteJobDetails(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
      }

}