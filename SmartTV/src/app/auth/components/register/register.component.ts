import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {RegisterService} from '../../../Core/Service/register.service';
import { Router } from '@angular/router';
import {Register} from '../../../Core/Interface/register';
import {FormsModule, FormControl} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  selected = 'Admin';
  Roles: any = ['Admin', 'Author', 'Reader'];
  register:Register={
    username:'',
    email:'',
    password:'',
    phone:'',
    role:''
  };
  
  constructor(private httpClient: HttpClient,private registerUser:RegisterService,
    private router:Router, private ngSnackbar:MatSnackBar ) { }

  ngOnInit() {
  }

  //Register user API Integration
  onSubmit(form:NgForm){
    if(form.valid){
      this.registerUser.registerUserService(this.register).subscribe((res:any)=>{
        if(res){
          this.ngSnackbar.open('Success: '+res.message, 'OK',{duration:5000,panelClass:'snackbar-success'});
        }
      })
    }else{
      this.ngSnackbar.open('Please fill all the fields');
    }
  }

}