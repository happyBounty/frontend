/*
Project : Cryptotrades
FileName :  user.service.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the service which used to handle all api calls realted to user
*/
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { map} from 'rxjs/operators';
import {Common} from '../models/common';
import {API} from '../constants/api'
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  public notifier: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    private http: HttpClient
  ) { }

  /**
   * This is the function which used to get user jwt token for local storage
   */
  getToken = () => {
    var token = localStorage.getItem('token')
    return token == null ? '' : token;
  }

  /**
   * This is the function which used to parse jwt token using helper service
   */
  getUser() {
    var jwtHelper = new JwtHelperService();
    var token = this.getToken()
    if(token.length>0) {
      return jwtHelper.decodeToken(token);
    } else {
      return null;
    }
  }

  loginApi(params:any): Observable<Common> {
    let url = API.base_url + API.user_login;
    console.log("userService: === ",params, url);
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserializeLoggedIn(param)));
  }

  register(params:any): Observable<Common> {
    let url = API.base_url + API.user_register;
    console.log("user service/register function ==== ", url);
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserializeLoggedIn(param)));
  }

  forgotPassword(params:any): Observable<Common> {
    let url = API.base_url + API.user_forgot;
    return this.http.put<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  resetPassword(params:any): Observable<Common> {
    let url = API.base_url + API.user_reset;
    return this.http.put<Common>(url, params).pipe(map((param:any) => new Common().deserializeLoggedIn(param)));
  }

  viewProfile(user_id:any): Observable<Common> {
    let url = API.base_url + API.user_profile + '/' + user_id;
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserialize(param)));
  }

  updateApi(params:any,user_id:string): Observable<Common> {
    let url = API.base_url + API.user_update+ '/' + user_id;
    return this.http.put<Common>(url, params).pipe(map((param:any) => new Common().deserializeLoggedIn(param)));
  }

}
 