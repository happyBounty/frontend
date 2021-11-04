/*
Project : Cryptotrades
FileName :  settings.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show setting layout page with side menu
*/
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'
import {filter} from 'rxjs/operators';
import { config } from 'src/app/constants/config';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  topMenuHeight:number = 0;
  innerHeight:number = 0;
  isToggled:boolean = false;
  subscription:any;
  type:string = "wallet";
  constructor(
    private router: Router
  ) { 
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      var url = event.url.split("/").pop();
      if(url != 'general' && url != 'changepassword') {
        this.type = "wallet";
      } else {
        this.type = url
      }
    });
  }

  ngOnInit(): void {
    this.topMenuHeight = window.innerWidth>990 ? 73 : 58;
    this.innerHeight = window.innerHeight - this.topMenuHeight;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  /**
   * This is the function which used to minize and maximize setting menu on sidebar
   */
  minimizeMenu = () => {
    this.isToggled = this.isToggled ? false : true;
  }

  /**
   * This is the function which used to logout user from the applciation on menu click
   */
  logoutAction = () => {
    localStorage.removeItem("token");
    location.href = config.base_url
  }

}
