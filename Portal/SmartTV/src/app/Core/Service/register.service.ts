import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  authReq = environment.AUTH_SERVER;
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this.authReq + '/signup/signup', user);
  }
}
