import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Contract } from "../models";
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ContractService {
    constructor(
        private http: HttpClient
    ){}

    save(contract: Contract): Observable<any> {
		return this.http.post<any>('/api/contract', contract);
	}
}
