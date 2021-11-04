/*
Project : Cryptotrades
FileName :  aut-interceptor.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the httpinterceptor file used to add authorized header with api call if user logged in
*/
import { Injectable } from '@angular/core';
import {
   HttpInterceptor, HttpHandler, HttpRequest
  } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private user: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const authToken = this.user.getToken();

    if(authToken != '') {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', authToken)
      }); 
      return next.handle(authReq);
    } else {
      const authReq = req.clone(); 
      return next.handle(authReq);
    }
    
  }
}