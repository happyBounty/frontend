/*
Project : Cryptotrades
FileName :  register.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show register screen 
*/
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserService} from '../../services/user.service'
import { config } from 'src/app/constants/config';
import { SocialAuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  button_title = "Create Account"
  register: FormGroup;
  isAPILoading: boolean = false
  constructor(
    public formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private socialService: SocialAuthService
  ) {
    this.register = formbuilder.group({
      'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(255)])],
      'email': [null, Validators.compose([Validators.required, Validators.minLength(3),Validators.pattern('^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$')])],
      'first_name': [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
      'last_name': [null, Validators.compose([Validators.required, Validators.maxLength(32)])],
      'password': [null,Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      'confirm_password': [null,Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    })
   }

  ngOnInit(): void {
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

  /**
   * This is the function which used to create account with validation
   */
  onSubmit(formData: any) {
    if (this.register.valid && this.button_title == "Create Account") {
      if(formData.value.password != formData.value.confirm_password) {
        this.snackBar.open('Password Mismatch', "", { duration: 2000 });
        return;
      }
      this.button_title = "Creating Account..."
      this.registerApi({
        username: formData.value.username,
        first_name: formData.value.first_name,
        last_name: formData.value.last_name,
        email: formData.value.email,
        password: formData.value.password
      });
    } else {
      if (this.register.controls.username.invalid) {
        if (this.register.controls.username.errors) {
          if (this.register.controls.username.errors.required) {
            this.snackBar.open('Username is required', "", { duration: 2000 });
          } else if (this.register.controls.username.errors.minlength) {
            this.snackBar.open('Username required minimum 3 characters', "", { duration: 2000 });
          } else if (this.register.controls.username.errors.maxlength) {
            this.snackBar.open('Username required maximum 255 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.register.controls.email.invalid) {
        if (this.register.controls.email.errors) {
          console.log(this.register.controls.email.errors);
          if (this.register.controls.email.errors.required) {
            this.snackBar.open('Email is required', "", { duration: 2000 });
          } else if (this.register.controls.email.errors.minlength) {
            this.snackBar.open('Email required minimum 3 characters', "", { duration: 2000 });
          } else if (this.register.controls.email.errors.pattern) {
            this.snackBar.open('Invalid Email', "", { duration: 2000 });
          }
        }
      } else if (this.register.controls.first_name.invalid) {
        if (this.register.controls.first_name.errors) {
          if (this.register.controls.first_name.errors.required) {
            this.snackBar.open('First Name is required', "", { duration: 2000 });
          } else if (this.register.controls.first_name.errors.minlength) {
            this.snackBar.open('First Name required minimum 3 characters', "", { duration: 2000 });
          } else if (this.register.controls.first_name.errors.maxlength) {
            this.snackBar.open('First Name required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.register.controls.last_name.invalid) {
        if (this.register.controls.last_name.errors) {
          if (this.register.controls.last_name.errors.required) {
            this.snackBar.open('Last Name is required', "", { duration: 2000 });
          } else if (this.register.controls.last_name.errors.minlength) {
            this.snackBar.open('Last Name required minimum 3 characters', "", { duration: 2000 });
          } else if (this.register.controls.last_name.errors.maxlength) {
            this.snackBar.open('Last Name required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.register.controls.password.invalid) {
        if (this.register.controls.password.errors) {
          if (this.register.controls.password.errors.required) {
            this.snackBar.open('Password is required', "", { duration: 2000 });
          } else if (this.register.controls.password.errors.minlength) {
            this.snackBar.open('Password required minimum 3 characters', "", { duration: 2000 });
          } else if (this.register.controls.password.errors.maxlength) {
            this.snackBar.open('Password required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.register.controls.confirm_password.invalid) {
        if (this.register.controls.confirm_password.errors) {
          if (this.register.controls.confirm_password.errors.required) {
            this.snackBar.open('Confirm Password is required', "", { duration: 2000 });
          } else if (this.register.controls.confirm_password.errors.minlength) {
            this.snackBar.open('Confirm Password required minimum 3 characters', "", { duration: 2000 });
          } else if (this.register.controls.confirm_password.errors.maxlength) {
            this.snackBar.open('Confirm Password required maximum 32 characters', "", { duration: 2000 });
          } 
        }
      }
    }
    // console.log("Register Component: === ", formData);
  }

  /**
   * This is the function which used to create account through api
   */
  registerApi = (params:any) => {
    this.isAPILoading = true;
      this.userService.register(params).subscribe(result=>{
        this.isAPILoading = false;
        if(result.status == true) {
        localStorage.setItem('token',result.return_id);
        this.snackBar.open('Register Successful', "", { duration: 2000 });
        location.href = config.base_url
        } else {
        this.snackBar.open(result.message, "", { duration: 2000 });
        }
        this.button_title = "Create Account"
      })
  }

}
