import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  save(user: UserService): Observable<any> {
    return this.http.post<any>('/api/user', user);
  }

  delete(userId: number): Observable<any> {
		return this.http.delete(`/api/user/${userId}`);
	}
}
