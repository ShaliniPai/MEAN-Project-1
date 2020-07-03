import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authReq = environment.AUTH_SERVER;
  constructor(private http: HttpClient) { }

  loginUser(user) {
    console.log(user);
    return this.http.post<any>(this.authReq + '/login/login', user);
  }
}
