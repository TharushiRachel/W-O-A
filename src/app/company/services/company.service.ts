import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Company } from "../models";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CompanyService {
    constructor(
        private http: HttpClient
    ){}

    save(company: Company): Observable<any> {
		return this.http.post<any>('/api/company', company);
	}
}
