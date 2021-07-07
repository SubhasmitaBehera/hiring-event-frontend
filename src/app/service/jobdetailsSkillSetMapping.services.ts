import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class JobdetailsSkillSetmappingService{
    private baseUrl = 'http://localhost:8080/job-details-skill-set-mapping/';

    constructor(private http: HttpClient) { }
    
    createJobDetailsSkillSetMapping(jobdetailsSkillSetmapping: Object): Observable<Object> {
        
        return this.http.post(`${this.baseUrl}`, jobdetailsSkillSetmapping);
    }
    getSkillSetIds(id: number): Observable<any> {
        return this.http.get(`${this.baseUrl}/${id}`);
    }
}