/*
Project : Cryptotrades
FileName :  app.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the main component which load layout for the application
*/
import {AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CollapseDirective} from 'ngx-bootstrap/collapse';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
import { UserService } from './services/user.service';
import { config } from './constants/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked  {
  mediaBase:string = config.media_path
  title = 'nftfrontend';
  user:any = null;
  profile_image:string = ""
  current_page:string = ''
  private _isCollapsed: boolean = true;
  set isCollapsed(value) {
    this._isCollapsed = value;
  }
  get isCollapsed() {
    if (this.collapseRef) {
      // temp fix for "overflow: hidden"
      if (getComputedStyle(this.collapseRef.nativeElement).getPropertyValue('display') === 'flex') {
       this.renderer.removeStyle(this.collapseRef.nativeElement, 'overflow');
      }
    }
    return this._isCollapsed;
  }
  @ViewChild(CollapseDirective, { read: ElementRef, static: false }) collapse !: CollapseDirective;
  collapseRef:any;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private userService: UserService
  ) {
    this.user = this.userService.getUser();
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      if(this.user != null) {
        if(this.user.status == "reset") {
          this.router.navigate(['/reset']);
        }
      }
      var url = event.url.split("/");
      console.log(url);
      if(url[1].includes("?")) {
        var suburl = url[1].split("?")
        this.current_page = suburl[0];
      } else {
        this.current_page = url[1];
      }
     
    });
   }

  ngOnInit() {
    if(this.user != null) {
      this.profile_image = this.user.profile_image != '' ? this.user.profile_image : "nouser.jpg"
      if(this.user.status == "reset") {
        this.router.navigate(['/reset']);
      }
    }
  }

  ngAfterViewChecked (): void {
    this.collapseRef = this.collapse;
  }

  /**
   * This is the function which used to logout user from the application on menu click
   */
  logoutAction = () => {
    localStorage.removeItem("token");
    location.href = config.base_url
  }
}
