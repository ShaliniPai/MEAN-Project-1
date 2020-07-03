import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../../Core/Service/register.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerUserData = {
    username: '',
    email: '',
    password: '',
    phone: '',
    role: ''
  };
  constructor(private register: RegisterService, private router: Router, private ngSnackbar: MatSnackBar) { }

  ngOnInit() {
  }

  registerUser() {
    this.register.registerUser(this.registerUserData).subscribe((res: any) => {
      if (res.status === 'Success') {
        this.ngSnackbar.open('Success: ' + res.message, 'OK', { duration: 5000, panelClass: 'snackbar-success' });
      }
      this.router.navigateByUrl('/login');
    },
      (err) => {
        console.log(err);
        this.ngSnackbar.open('Failure: ' + err.error.message, 'OK', { duration: 5000, panelClass: 'alert-success' });
      });
  }

}
