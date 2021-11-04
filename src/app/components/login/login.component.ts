/*
Project : Cryptotrades
FileName :  login.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show login page for user
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../services/user.service'
import { Router } from '@angular/router';
import { config } from 'src/app/constants/config';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  button_title:string = "Login"
  login: FormGroup;
  isAPILoading: boolean = false
  constructor(
    public formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router,
    private socialService: SocialAuthService
  ) { 
    this.login = formbuilder.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(255)])],
      'password': [null,Validators.compose([Validators.required, Validators.minLength(3)])]
    })
  }

  ngOnInit(): void {
  }

  /**
   * This is the function which used to validate login form on submit
   */
  onSubmit(formData: any) {
    if (this.login.valid && this.button_title == "Login") {
      this.button_title = "Logging In..."
      this.loginApi({
        username: formData.value.username,
        password: formData.value.password
      });
    } else {
      if (this.login.controls.username.invalid) {
        if (this.login.controls.username.errors) {
          if (this.login.controls.username.errors.required) {
            this.snackBar.open('Username is required', "", { duration: 2000 });
          } else if (this.login.controls.username.errors.minlength) {
            this.snackBar.open('Username required minimum 3 characters', "", { duration: 2000 });
          } else if (this.login.controls.username.errors.maxlength) {
            this.snackBar.open('Username required maximum 255 characters', "", { duration: 2000 });
          } 
        }
      }else if (this.login.controls.password.invalid) {
        if (this.login.controls.password.errors) {
          if (this.login.controls.password.errors.required) {
            this.snackBar.open('Password is required', "", { duration: 2000 });
          } else if (this.login.controls.password.errors.minlength) {
            this.snackBar.open('Password required minimum 3 characters', "", { duration: 2000 });
          } 
        }
      }
    }
  }

  /**
   * This is the function which used to send login information with params to api
   */
  loginApi = (params:any) => {
    this.isAPILoading = true;
     this.userService.loginApi(params).subscribe(result=>{
       this.isAPILoading = false;
       if(result.status == true) {
        localStorage.setItem('token',result.return_id);
        this.snackBar.open('Login Successful', "", { duration: 2000 });
        location.href = config.base_url
       } else {
        this.button_title = "Login"
        this.snackBar.open(result.message, "", { duration: 2000 });
       }
     })
  }

  /**
   * This is the function which used to access google sign on button click
   */
  signInWithGoogle(): void {
  this.socialService.signIn(GoogleLoginProvider.PROVIDER_ID);
  this.socialService.authState.subscribe((user:any) => {
    
    this.isAPILoading = true;
    var params = {
        'username':user.name,
        'first_name': user.firstName,
        'last_name': user.lastName,
        'email':user.email,
        'photo':user.photoUrl,
        'profile_image':user.id + '.jpg',
        'social_info':JSON.stringify({"id":user.id,"type":"google"})
      }
      this.userService.register(params).subscribe(
        (result: any) => {
          this.isAPILoading = false;
          if(result.status == true) {
            localStorage.setItem('token',result.return_id);
            this.snackBar.open('Login Successful', "", { duration: 2000 });
            location.href = config.base_url
            } else {
            this.snackBar.open(result.message, "", { duration: 2000 });
            }
        }
      )
  });
}
  
/**
* This is the function which used to access facebook sign on button click
*/
signInWithFacebook(): void {
  this.socialService.signIn(FacebookLoginProvider.PROVIDER_ID);
  this.socialService.authState.subscribe((user:any) => {
    this.isAPILoading = true;
    var params = {
        'username':user.name,
        'first_name': user.firstName,
        'last_name': user.lastName,
        'email':user.email ? user.email : user.id + '@facebook.com',
        'photo':user.photoUrl,
        'profile_image':user.id + '.jpg',
        'social_info':JSON.stringify({"id":user.id,"type":"facebook"})
      }
      console.log(params);
      this.userService.register(params).subscribe(
      (result: any) => {
        console.log(result)
        this.isAPILoading = false;
        if(result.status == true) {
          localStorage.setItem('token',result.return_id);
          this.snackBar.open('Login Successful', "", { duration: 2000 });
          location.href = config.base_url
          } else {
          this.snackBar.open(result.message, "", { duration: 2000 });
          }
      }
    )
  });
}

}
