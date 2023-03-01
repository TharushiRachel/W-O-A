import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Group } from '../models/group.model';


@Injectable({ providedIn: 'root' })
export class GroupService{
    constructor(private http: HttpClient){}

    // getGroups(filter: any): Observable<any> {
	// 	return this.http.get<any>('/api/group', { params: filter });
	// }

	// getGroups(groupId: any): Observable<any> {
	// 	return this.http.get<any>(`/api/group/${groupId}`);
	// }

	save(group: Group): Observable<any> {
		return this.http.post<any>('/api/group', group);
	}

	// update(group: Group, groupId: number): Observable<any> {
	// 	return this.http.put<any>(`/api/group/${groupId}`, group);
	// }

	// delete(groupId: number): Observable<any> {
	// 	return this.http.delete(`/api/group/${groupId}`);
	// }

}