/*
Project : Cryptotrades
FileName :  profile.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to load profile layout in user screen
*/
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';
import { Clipboard } from "@angular/cdk/clipboard"
import { UserService } from 'src/app/services/user.service';
import { Router, NavigationEnd } from '@angular/router'
import {filter} from 'rxjs/operators';
import { config } from 'src/app/constants/config';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FileUploader} from 'ng2-file-upload';
import { API } from 'src/app/constants/api';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements AfterViewInit {
  subscription:any;
  isFixedSidebar:boolean = false;
  isToggled:boolean = false;
  @ViewChild('topContainer', { read: ElementRef, static:false })topContainer: ElementRef;
  @ViewChild('profileContainer', { read: ElementRef, static:false })profileContainer: ElementRef;
  innerHeight:number = 0;
  topMenuHeight:number = 0;
  topMenuHeightAdjustment:number = 0
  topHeight:number = 0;
  mediaBase:string = config.media_path
  type:string = "collected"
  currentUserID: string = "";
  currentUser: any;
  ownProfile: boolean = false;
  userInfo:any = null;
  profile_image: string = 'nouser.jpg' 
  profile_cover: string = 'default.jpg'
  profile_name:string = ''; 

  public uploader: FileUploader;
  avatarname:string = ''

  public cover_uploader: FileUploader;
  covername:string = ''
  spinner: boolean = false;
  
  constructor(
    private userService: UserService,
    private router: Router,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar,
  ) { 
    this.topContainer = this.profileContainer = this.subscription
    this.currentUser = this.userService.getUser();
    this.subscription = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event:any) => {
      var url = event.url.split("/").pop();
      if(url != 'created' && url != 'activity' && url != 'offers' && url != 'favorited') {
        this.type = "collected";
      } else {
        this.type = url
      }
      var user_id = event.url.replace('/'+this.type,'').split("/").pop();
      if(this.currentUserID != user_id) {
        this.currentUserID = user_id;
        if(this.currentUser) {
          this.ownProfile = (this.currentUser.user_id == this.currentUserID)? true: false;
        } else {
          this.ownProfile = false;
        }
        
        if(!this.ownProfile && (this.type != "created" && this.type != "collected" && this.type != "favorited" )) {
          location.href = config.base_url
        }
        this.getProfileInfo()
      }
    });

    this.uploader = new FileUploader({
      url: API.base_url + '/media/avatar',
      allowedMimeType: ['image/png', 'image/jpeg'],
      autoUpload: false,
      isHTML5: true,
      queueLimit: 1000,
      removeAfterUpload: false,
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    });
    
     this.uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    }

    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.uploader.onAfterAddingFile = (file) => {
      console.log("file is ", file);
      var ext = (file.file.type == "image/png") ? ".png" : ".jpg"
      this.avatarname = this.currentUser.username + "_" + (new Date).getTime() +  ext;
      file.file.name = this.avatarname
      
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(item);
      console.log('Item');
      var _this=this;
      this.profile_image = this.avatarname
      this.updateProfileApi({
        profile_image: this.profile_image
      });
    }; 
    
    this.uploader.onWhenAddingFileFailed = (item) => {
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
      this.snackBar.open("Uploaded file should be JPEG/PNG", "", { duration: 2000 });
    }

    this.cover_uploader = new FileUploader({
      url: API.base_url + '/media/cover',
      allowedMimeType: ['image/png', 'image/jpeg'],
      autoUpload: false,
      isHTML5: true,
      queueLimit: 1000,
      removeAfterUpload: false,
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    });
    
     this.cover_uploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    }

    this.cover_uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.cover_uploader.onAfterAddingFile = (file) => {
      console.log("file is ", file);
      var ext = (file.file.type == "image/png") ? ".png" : ".jpg"
      this.covername = this.currentUser.username + "_" + (new Date).getTime() +  ext;
      file.file.name = this.covername
      
    };
    this.cover_uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(item);
      console.log('Item');
      var _this=this;
      this.profile_cover = this.covername
      this.updateProfileApi({
        profile_cover: this.profile_cover
      });
    }; 
    
    this.cover_uploader.onWhenAddingFileFailed = (item) => {
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
      this.snackBar.open("Uploaded file should be JPEG/PNG", "", { duration: 2000 });
    }

  }

  ngOnInit(): void {
    this.topMenuHeight = window.innerWidth>990 ? 73 : 58;
    this.innerHeight = window.innerHeight - this.topMenuHeight;
    this.topMenuHeightAdjustment = window.innerWidth>990 ? 78 : 78;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.topHeight = this.topContainer.nativeElement.clientHeight;
  }

  /**
   * This is the function which used to get profile information for user
   */
  getProfileInfo = () => {
    this.userService.viewProfile(this.currentUserID).subscribe(result=>{
      var resulter:any = result;
      this.userInfo = resulter.result;
      this.updateProfileInfo()
    })
  }

  /**
   * This is the function which initiate profile image upload on button click
   */
  uploadAvatar = () => {
    this.spinner = true;
    this.uploader.uploadAll();
  }

  /**
   * This is the function which initiate profile cover upload on button click
   */
  uploadCover = () => {
    this.spinner = true;
    this.cover_uploader.uploadAll();
  }

  /**
   * This is the function which parse profile information for display
   */
  updateProfileInfo = () => {
    this.profile_cover = this.userInfo.profile_cover ? this.userInfo.profile_cover : 'default.jpg';
    this.profile_image = this.userInfo.profile_image.length > 0 ? this.userInfo.profile_image : 'nouser.jpg';
    this.profile_name = this.userInfo.first_name + ' ' + this.userInfo.last_name
  }

  /**
   * This is the function which used to copy ethereum address 
   */
  copyAddress=()=> {
     this.clipboard.copy(this.userInfo.public_key)
     this.snackBar.open('Ethereum address copied', "", { duration: 2000 });
  }

  /**
   * This is the function which handle sticky sidebar
   */
  scrollHandler(event:any) {
    console.log(event.target.scrollTop);
    console.log(this.topHeight);
    if(event.target.scrollTop<(this.topHeight+this.topMenuHeightAdjustment)) {
      this.isFixedSidebar = false;
    } else {
      this.isFixedSidebar = true;
    }
  }

  /**
   * This is the function which used to minimize and maximize the profile side bar
   */
  minimizeMenu = () => {
    this.isToggled = this.isToggled ? false : true;
  }

  /**
   * This is the function which used to navigate user to different profile pages
   */
  profileLink = (pageName:any) => {
    this.router.navigate(['/profile/'+this.currentUserID + '/' + pageName]);
    try {
      this.profileContainer.nativeElement.scrollTop = 0
    } catch(err) { }
  }


  /**
   * This is the function which used to update user profile information through api
   */
  updateProfileApi = (params:any) => {
    this.userService.updateApi(params,this.currentUser.user_id).subscribe(result=>{
     this.spinner = false;
     this.snackBar.open(result.message, "", { duration: 2000 });
     if(result.status == true) {
       localStorage.setItem('token',result.return_id);
       location.href = config.base_url + '/profile/' +this.currentUser.user_id
     }
    })
  }

}
