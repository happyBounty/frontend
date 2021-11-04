/*
Project : Cryptotrades
FileName :  addcollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show for user to  add and edit collection
*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FileUploader} from 'ng2-file-upload';
import { API } from 'src/app/constants/api';
import { config } from 'src/app/constants/config';
import { CollectionService } from 'src/app/services/collection.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-addcollection',
  templateUrl: './addcollection.component.html',
  styleUrls: ['./addcollection.component.css']
})
export class AddcollectionComponent implements OnInit {
  subscription:any;
  mediaBase:string = config.media_path
  page_title = "Add Your Collection"
  button_title = "Create"
  collectionForm: FormGroup;
  spinner: boolean = false;
  currentUser:any;
  collectionID:any = ''
  collectionInfo:any;

  public logouploader: FileUploader;
  logoname:string = ''
  collection_logo:string = ''

  public banneruploader: FileUploader;
  bannername:string = ''
  collection_banner:string = ''
  
  constructor(
    public formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private collectionService: CollectionService,
    private router:Router,
    private route:ActivatedRoute
  ) { 
    this.currentUser = this.userService.getUser();
    this.collectionForm = formbuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(255)])],
      'royalties': [null,Validators.compose([Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,5})?$")])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(1000)])],
      'banner': [""],
      'image': [""],
    })
    this.logouploader = new FileUploader({
      url: API.base_url + '/media/collectionlogo',
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
    
    this.logouploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    }

    this.logouploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.logouploader.onAfterAddingFile = (file) => {
      console.log("file is ", file);
      var ext = (file.file.type == "image/png") ? ".png" : ".jpg"
      this.logoname = this.currentUser.username + "_" + (new Date).getTime() +  ext;
      file.file.name = this.logoname
      
    };
    this.logouploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(item);
      console.log('Item');
      this.collection_logo = this.logoname;
      this.collectionForm.controls.image.setValue(this.collection_logo)
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
    }; 
    
    this.logouploader.onWhenAddingFileFailed = (item) => {
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
      this.snackBar.open("Uploaded file should be JPEG/PNG", "", { duration: 2000 });
    }

    this.banneruploader = new FileUploader({
      url: API.base_url + '/media/collectionbanner',
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
    
    this.banneruploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    }

    this.banneruploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.banneruploader.onAfterAddingFile = (file) => {
      console.log("file is ", file);
      var ext = (file.file.type == "image/png") ? ".png" : ".jpg"
      this.bannername = this.currentUser.username + "_" + (new Date).getTime() +  ext;
      file.file.name = this.bannername
      
    };
    this.banneruploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(item);
      console.log('Item');
      this.collection_banner = this.bannername;
      this.collectionForm.controls.banner.setValue(this.collection_banner)
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
    }; 
    
    this.banneruploader.onWhenAddingFileFailed = (item) => {
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
      this.snackBar.open("Uploaded file should be JPEG/PNG", "", { duration: 2000 });
    }
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      if(params.id) {
        this.collectionID = params.id;
        this.page_title = "Update Your Collection";
        this.button_title = "Update"
        this.getCollectionInfo()
      } else {
        this.collectionID = ""
      }
      console.log(params) //log the entire params object
    });
  }

  /**
   * This is the function which used to get collection details
   */
  getCollectionInfo = () => {
    var params = {
      collection_id : this.collectionID
    }
    this.collectionService.viewCollection(params).subscribe(result=>{
      var resulter:any = result.result;
      this.collectionInfo = resulter
      this.updateCollectionInfo()
    })
  }

  /**
   * This is the function which used to parse collection detail 
   */
  updateCollectionInfo = () => {
    this.collection_logo = this.collectionInfo.image.length > 0 ? this.collectionInfo.image : '';
    this.collection_banner = this.collectionInfo.banner.length > 0 ? this.collectionInfo.banner : '';
    this.collectionForm.controls.name.setValue(this.collectionInfo.name);
    this.collectionForm.controls.description.setValue(this.collectionInfo.description);
    this.collectionForm.controls.image.setValue(this.collectionInfo.image);
    this.collectionForm.controls.banner.setValue(this.collectionInfo.banner);
    this.collectionForm.controls.royalties.setValue(this.collectionInfo.royalties);
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  /**
   * This is the function which used to upload collection logo on change
   */
  uploadLogo = () => {
    this.spinner = true;
    this.logouploader.uploadAll();
  }

  /**
   * This is the function which used to upload collection banner on change
   */
  uploadBanner = () => {
    this.spinner = true;
    this.banneruploader.uploadAll();
  }

  /**
   * This is the function which used to delete logo
   */
  deleteLogo = () => {
    this.collection_logo = ""
    this.collectionForm.controls.image.setValue("")
  }

  /**
   * This is the function which used to delete banner
   */
  deleteBanner = () => {
    this.collection_banner = ""
    this.collectionForm.controls.banner.setValue("")
  }


  /**
   * This is the function which used to validate collection before api submit 
   */
  onSubmit = (formData:any) => {
    if (this.collectionForm.valid) {
      if(this.collection_logo == '') {
        this.snackBar.open('Collection logo is required', "", { duration: 2000 });
        return
      }

      if(this.collection_banner == '') {
        this.snackBar.open('Collection banner is required', "", { duration: 2000 });
        return
      }
      this.spinner = true;
      if(this.collectionID!= "") {
        this.updateCollectionApi({
          name: formData.value.name,
          description: formData.value.description,
          royalties: formData.value.royalties,
          image: formData.value.image,
          banner: formData.value.banner,
          collection_id:this.collectionID
        });
      } else {
        this.collectionCreateApi({
          name: formData.value.name,
          description: formData.value.description,
          royalties: formData.value.royalties,
          image: formData.value.image,
          banner: formData.value.banner,
        });
      }
    } else {
      if (this.collectionForm.controls.name.invalid) {
        if (this.collectionForm.controls.name.errors) {
          if (this.collectionForm.controls.name.errors.required) {
            this.snackBar.open('Name is required', "", { duration: 2000 });
          } else if (this.collectionForm.controls.name.errors.minlength) {
            this.snackBar.open('Name required minimum 3 characters', "", { duration: 2000 });
          } else if (this.collectionForm.controls.name.errors.maxlength) {
            this.snackBar.open('Name required maximum 255 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.collectionForm.controls.description.invalid) {
        if (this.collectionForm.controls.description.errors) {
          if (this.collectionForm.controls.description.errors.required) {
            this.snackBar.open('Description is required', "", { duration: 2000 });
          } else {
            this.snackBar.open('Description should be between 3 to 1000 characters', "", { duration: 2000 });
          }
        }
      } else if (this.collectionForm.controls.royalties.invalid) {
        if (this.collectionForm.controls.royalties.errors) {
          if (this.collectionForm.controls.royalties.errors.required) {
            this.snackBar.open('Royalties value is required', "", { duration: 2000 });
          } else {
            this.snackBar.open('Royalties value should be numeric', "", { duration: 2000 });
          }
        }
      }
    }
  }

  /**
   * This is the function which used to update collection from api
   */
  updateCollectionApi = (params:any) => {
    this.collectionService.updateCollection(params).subscribe(result=>{
      if(result.status == true) {
        this.router.navigate(['/collection/mycollection']);
      }
      this.spinner = false
      this.snackBar.open(result.message, "", { duration: 2000 });
    })
  }

  /**
   * This is the function which used to add collection from api
   */
  collectionCreateApi = (params:any) => {
    this.collectionService.addCollection(params).subscribe(result=>{
      if(result.status == true) {
        this.router.navigate(['/collection/mycollection']);
      }
      this.spinner = false
      this.snackBar.open(result.message, "", { duration: 2000 });
    })
  }

}
