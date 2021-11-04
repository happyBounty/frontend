/*
Project : Cryptotrades
FileName :  general.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show edit profile screen for user
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { config } from 'src/app/constants/config';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent implements OnInit {
  button_title = "Save"
  generalForm: FormGroup;
  isAPILoading: boolean = false
  currentUser:any;
  userInfo:any;
  constructor(
    public formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService
  ) {
    this.currentUser = this.userService.getUser()
    this.generalForm = formbuilder.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(255)])],
      'email': [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])],
      'first_name': [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
      'last_name': [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
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
      this.generalForm.controls.username.setValue(this.userInfo.username)
      this.generalForm.controls.email.setValue(this.userInfo.email)
      this.generalForm.controls.first_name.setValue(this.userInfo.first_name)
      this.generalForm.controls.last_name.setValue(this.userInfo.last_name)
    })
  }  


  /**
   * This is the function which used update profile information with validation
   */
  onSubmit(formData:any) {
    if (this.generalForm.valid && this.button_title == "Save") {
      this.button_title = "Saving..."
      this.updateApi({
        username: formData.value.username,
        first_name: formData.value.first_name,
        last_name: formData.value.last_name,
        email: formData.value.email
      });
    } else {
      if (this.generalForm.controls.username.invalid) {
        if (this.generalForm.controls.username.errors) {
          if (this.generalForm.controls.username.errors.required) {
            this.snackBar.open('Username is required', "", { duration: 2000 });
          } else if (this.generalForm.controls.username.errors.minlength) {
            this.snackBar.open('Username required minimum 3 characters', "", { duration: 2000 });
          } else if (this.generalForm.controls.username.errors.maxlength) {
            this.snackBar.open('Username required maximum 255 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.generalForm.controls.email.invalid) {
        if (this.generalForm.controls.email.errors) {
          console.log(this.generalForm.controls.email.errors);
          if (this.generalForm.controls.email.errors.required) {
            this.snackBar.open('Email is required', "", { duration: 2000 });
          } else if (this.generalForm.controls.email.errors.minlength) {
            this.snackBar.open('Email required minimum 3 characters', "", { duration: 2000 });
          } else if (this.generalForm.controls.email.errors.pattern) {
            this.snackBar.open('Invalid Email', "", { duration: 2000 });
          }
        }
      } else if (this.generalForm.controls.first_name.invalid) {
        if (this.generalForm.controls.first_name.errors) {
          if (this.generalForm.controls.first_name.errors.required) {
            this.snackBar.open('First Name is required', "", { duration: 2000 });
          } else if (this.generalForm.controls.first_name.errors.minlength) {
            this.snackBar.open('First Name required minimum 3 characters', "", { duration: 2000 });
          } else if (this.generalForm.controls.first_name.errors.maxlength) {
            this.snackBar.open('First Name required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.generalForm.controls.last_name.invalid) {
        if (this.generalForm.controls.last_name.errors) {
          if (this.generalForm.controls.last_name.errors.required) {
            this.snackBar.open('Last Name is required', "", { duration: 2000 });
          } else if (this.generalForm.controls.last_name.errors.minlength) {
            this.snackBar.open('Last Name required minimum 3 characters', "", { duration: 2000 });
          } else if (this.generalForm.controls.last_name.errors.maxlength) {
            this.snackBar.open('Last Name required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      }
    }
  }

  /**
   * This is the function which used update profile information through api
   */
  updateApi = (params:any) => {
    this.isAPILoading = true;
     this.userService.updateApi(params,this.currentUser.user_id).subscribe(result=>{
       this.isAPILoading = false;
       if(result.status == true) {
        localStorage.setItem('token',result.return_id);
        this.snackBar.open('General settings updated successfully', "", { duration: 2000 });
        location.href = config.base_url
       } else {
        this.snackBar.open(result.message, "", { duration: 2000 });
       }
       this.button_title = "Save"
     })
  }

}
