/*
Project : Cryptotrades
FileName :  reset.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show reset screen if user request forgot password
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../services/user.service'
import { Router } from '@angular/router';
import { config } from 'src/app/constants/config';
@Component({
  selector: 'app-dashboard',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  button_title:string = "Submit"
  resetForm: FormGroup;
  isAPILoading: boolean = false
  constructor(
    public formbuilder: FormBuilder, 
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router,
  ) {
    this.resetForm = formbuilder.group({
      'password': [null,Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      'confirm_password': [null,Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    })
   }

  ngOnInit(): void {
  }

  /**
   * This is the function which used to reset password with validation
   */
  onSubmit(formData: any) {
    if (this.resetForm.valid && this.button_title == "Submit") {
      if(formData.value.password != formData.value.confirm_password) {
        this.snackBar.open('Password Mismatch', "", { duration: 2000 });
        return;
      }
      this.button_title = "Submitting..."
      this.resetApi({
        newpassword: formData.value.password
      });
    } else {
      if (this.resetForm.controls.password.invalid) {
        if (this.resetForm.controls.password.errors) {
          if (this.resetForm.controls.password.errors.required) {
            this.snackBar.open('Password is required', "", { duration: 2000 });
          } else if (this.resetForm.controls.password.errors.minlength) {
            this.snackBar.open('Password required minimum 3 characters', "", { duration: 2000 });
          } else if (this.resetForm.controls.password.errors.maxlength) {
            this.snackBar.open('Password required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.resetForm.controls.confirm_password.invalid) {
        if (this.resetForm.controls.confirm_password.errors) {
          if (this.resetForm.controls.confirm_password.errors.required) {
            this.snackBar.open('Confirm Password is required', "", { duration: 2000 });
          } else if (this.resetForm.controls.confirm_password.errors.minlength) {
            this.snackBar.open('Confirm Password required minimum 3 characters', "", { duration: 2000 });
          } else if (this.resetForm.controls.confirm_password.errors.maxlength) {
            this.snackBar.open('Confirm Password required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      }
    }
  }

  /**
   * This is the function which used to reset password through api
   */
  resetApi = (params:any) => {
    this.isAPILoading = true;
     this.userService.resetPassword(params).subscribe(result=>{
       this.isAPILoading = false;
       if(result.status == true) {
        localStorage.setItem('token',result.return_id);
        this.snackBar.open('Reset password successful', "", { duration: 2000 });
        location.href = config.base_url
       } else {
        this.snackBar.open(result.message, "", { duration: 2000 });
       }
       this.button_title = "Submit"
     })
  }

}
