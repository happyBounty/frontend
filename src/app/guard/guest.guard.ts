/*
Project : Cryptotrades
FileName :  guest.guard.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the file used to restrict route for only guest
*/
import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service'
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  constructor(private userService: UserService,private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      var userDetails = this.userService.getUser();
      if(userDetails == null){
        return true
      }
      this.router.navigate(['/'])
      return false;
    }
}
