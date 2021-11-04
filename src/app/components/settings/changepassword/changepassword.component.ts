/*
Project : Cryptotrades
FileName :  changepassword.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show change password screen for user
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { config } from 'src/app/constants/config';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  button_title = "Save"
  passwordForm: FormGroup;
  isAPILoading: boolean = false
  currentUser:any;
  userInfo:any;
  constructor(
    public formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {
    this.currentUser = this.userService.getUser()
    this.passwordForm = formbuilder.group({
      'password': [null,Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      'confirm_password': [null,Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    })
    this.getProfileInfo();
   }

  ngOnInit(): void {
  }

  /**
   * This is the function which used to get profile information of logged in user
   */
  getProfileInfo = () => {
    this.userService.viewProfile(this.currentUser.user_id).subscribe(result=>{
      var resulter:any = result;
      this.userInfo = resulter.result;
    })
  }  

  /**
   * This is the function which used to change password with validation
   */
  onSubmit(formData:any) {
    if (this.passwordForm.valid && this.button_title == "Save") {
      if(formData.value.password != formData.value.confirm_password) {
        this.snackBar.open('Password Mismatch', "", { duration: 2000 });
        return;
      }
      this.button_title = "Saving..."
      this.updateApi({
        password: formData.value.password,
      });
    } else {
      if (this.passwordForm.controls.password.invalid) {
        if (this.passwordForm.controls.password.errors) {
          if (this.passwordForm.controls.password.errors.required) {
            this.snackBar.open('Password is required', "", { duration: 2000 });
          } else if (this.passwordForm.controls.password.errors.minlength) {
            this.snackBar.open('Password required minimum 3 characters', "", { duration: 2000 });
          } else if (this.passwordForm.controls.password.errors.maxlength) {
            this.snackBar.open('Password required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.passwordForm.controls.confirm_password.invalid) {
        if (this.passwordForm.controls.confirm_password.errors) {
          if (this.passwordForm.controls.confirm_password.errors.required) {
            this.snackBar.open('Confirm Password is required', "", { duration: 2000 });
          } else if (this.passwordForm.controls.confirm_password.errors.minlength) {
            this.snackBar.open('Confirm Password required minimum 3 characters', "", { duration: 2000 });
          } else if (this.passwordForm.controls.confirm_password.errors.maxlength) {
            this.snackBar.open('Confirm Password required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      }
    }
     
  }

  /**
   * This is the function which used to change password through api
   */
  updateApi = (params:any) => {
    this.isAPILoading = true;
     this.userService.updateApi(params,this.currentUser.user_id).subscribe(result=>{
       this.isAPILoading = false;
       if(result.status == true) {
        localStorage.setItem('token',result.return_id);
        this.snackBar.open('Password updated successfully', "", { duration: 2000 });
        location.href = config.base_url
       } else {
        this.snackBar.open(result.message, "", { duration: 2000 });
       }
       this.button_title = "Save"
     })
  }

}
