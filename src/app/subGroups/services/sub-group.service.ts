import { HttpClient } from "@angular/common/http";
import { SubGroup } from "../models";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SubGroupService{
    constructor(
        private http: HttpClient
    ){}

    save(subGroup: SubGroup): Observable<any> {
		return this.http.post<any>('/api/sub-group', subGroup);
	}
}