import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from  'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Register } from '../Interface/register';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class RegisterService{
    authReq = environment.AUTH_SERVER;
    handleError: any;

    constructor(private http:HttpClient, private router:Router){}

    httpOptions = {
        headers:new HttpHeaders({
            'Content-Type':'application/json'
        })
    }

    //Calling API for User Registration
    registerUserService(payload:Register){
        console.log(payload);
        return this.http.post(this.authReq+'/register/register',payload)
        .pipe(catchError(err=>this.handleError(err)));
    }
}
