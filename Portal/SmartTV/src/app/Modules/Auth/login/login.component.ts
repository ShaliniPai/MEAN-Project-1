import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../Core/Service/login.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {
    email: '',
    password: ''
  };
  constructor(private login: LoginService, private router: Router, private ngSnackbar: MatSnackBar) { }

  ngOnInit() {
  }

  loginUser() {
    this.login.loginUser(this.loginUserData).subscribe((res: any) => {
      if (res.status === 'Success') {
        localStorage.setItem('Token', res.token);
      }
      this.router.navigate(['dashboard']);
    },
      (err) => {
        console.log(err);
        this.ngSnackbar.open('Failure: ' + err.error.message, 'OK', { duration: 5000, panelClass: 'alert-success' });
      });
  }
}

