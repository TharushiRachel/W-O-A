import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Provider } from '../models/provider.model';


@Injectable({ providedIn: 'root' })
export class ProviderService{
    constructor(private http: HttpClient){}

    // getGroups(filter: any): Observable<any> {
	// 	return this.http.get<any>('/api/group', { params: filter });
	// }

	// getGroups(groupId: any): Observable<any> {
	// 	return this.http.get<any>(`/api/group/${groupId}`);
	// }

	save(provider: Provider): Observable<any> {
		return this.http.post<any>('/api/provider', provider);
	}

	// update(group: Group, groupId: number): Observable<any> {
	// 	return this.http.put<any>(`/api/group/${groupId}`, group);
	// }

	delete(providerId: number): Observable<any> {
		return this.http.delete(`/api/provider/${providerId}`);
	}

}