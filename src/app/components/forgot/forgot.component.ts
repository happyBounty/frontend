/*
Project : Cryptotrades
FileName :  forgot.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show forgot password screen for user
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../services/user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  button_title:string = "Submit"
  forgot: FormGroup;
  isAPILoading: boolean = false
  constructor(
    public formbuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router,
  ) { 
    this.forgot = formbuilder.group({
      'email': [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])]
    })
  }

  ngOnInit(): void {
  }

  /**
   * This is the function which used to validate form on submit
   */
  onSubmit(formData: any) {
    if (this.forgot.valid && this.button_title == "Submit") {
      this.button_title = "Submitting..."
      this.forgotApi({
        email: formData.value.email
      });
    } else {
      if (this.forgot.controls.email.invalid) {
        if (this.forgot.controls.email.errors) {
        	console.log(this.forgot.controls.email.errors);
          if (this.forgot.controls.email.errors.required) {
            this.snackBar.open('Email is required', "", { duration: 2000 });
          } else if (this.forgot.controls.email.errors.minlength) {
            this.snackBar.open('Email required minimum 3 characters', "", { duration: 2000 });
          } else if (this.forgot.controls.email.errors.pattern) {
            this.snackBar.open('Invalid Email', "", { duration: 2000 });
          }
        }
      }
    }
  }

  /**
   * This is the function which used to send forgot password api request 
   */
  forgotApi = (params:any) => {
    this.isAPILoading = true;
     this.userService.forgotPassword(params).subscribe(result=>{
       this.isAPILoading = false;
       if(result.status == true) {
        this.snackBar.open('Request submitted successfully', "", { duration: 2000 });
        this.router.navigate(['/login'])
       } else {
        this.button_title = "Submit"
        this.snackBar.open(result.message, "", { duration: 2000 });
       }
     })
  }

}
