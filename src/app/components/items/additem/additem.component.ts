/*
Project : Cryptotrades
FileName :  additem.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show add and edit item screen for user
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FileUploader} from 'ng2-file-upload';
import { API } from 'src/app/constants/api';
import { config } from 'src/app/constants/config';
import { UserService } from 'src/app/services/user.service';
import { ItemService } from 'src/app/services/item.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  @ViewChild('propertyModal') public propertyModal: ModalDirective;
  propertyModalType:string = "";
  propertyModalName:string = "";

  @ViewChild('levelModal') public levelModal: ModalDirective;
  levelModalValue:string = "";
  levelModalValueOf:string = "";
  levelModalName:string = "";

  @ViewChild('statModal') public statModal: ModalDirective;
  statModalValue:string = "";
  statModalValueOf:string = "";
  statModalName:string = "";

  subscription:any;
  mediaBase:string = config.media_path
  page_title = "Add Your Item"
  button_title = "Save"
  itemForm: FormGroup;
  spinner: boolean = false;
  currentUser:any;
  collectionID:any = ''
  itemID:any = ''
  itemInfo:any;

  public thumbuploader: FileUploader;
  thumbname:string = ''
  item_thumb:string = ''

  public mediauploader: FileUploader;
  medianame:string = ''
  item_media:string = ''
  is_media_uploading: boolean = false
  progress:number = 0;

  categories:any = []
  attributes: any = []
  stats:any = [];
  levels:any = [];

  constructor(
    public formbuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private userService: UserService,
    private itemService: ItemService,
    private router:Router,
    private route:ActivatedRoute
  ) {
    this.levelModal = this.statModal = this.propertyModal = this.subscription;
    this.currentUser = this.userService.getUser();
    var urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    this.itemForm = formbuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(255)])],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(1000)])],
      'external_link': [null, Validators.compose([Validators.required, Validators.pattern(urlRegex)])],
      'category_id': ["", Validators.compose([Validators.required])],
      'price': [null,Validators.compose([Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,5})?$")])],
      'thumb': [""],
      'media': [""],
      'unlock_content_url': ["true"]
    })
    let that = this;
    this.thumbuploader = new FileUploader({
      url: API.base_url + '/media/itemthumb',
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
    
    this.thumbuploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    }

    this.thumbuploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.thumbuploader.onAfterAddingFile = (file) => {
      console.log("file is ", file);
      var ext = (file.file.type == "image/png") ? ".png" : ".jpg"
      this.thumbname = this.currentUser.username + "_" + (new Date).getTime() +  ext;
      file.file.name = this.thumbname
    };
    this.thumbuploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(item);
      console.log('Item');
      this.item_thumb = this.thumbname;
      this.itemForm.controls.thumb.setValue(this.item_thumb)
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
    }; 
    
    this.thumbuploader.onWhenAddingFileFailed = (item) => {
      let that = this;
      setTimeout(() => {
        that.spinner = false;
      }, 1000);
      this.snackBar.open("Uploaded file should be JPEG/PNG", "", { duration: 2000 });
    }

    this.mediauploader = new FileUploader({
      url: API.base_url + '/media/itemmedia',
      allowedMimeType: ['image/png', 'image/jpeg', 'video/mp4', 'image/gif', 'image/svg+xml','audio/webm', 'video/webm', 'audio/mp3', 'audio/wav', 'audio/ogg', 'video/ogg'],
      autoUpload: false,
      isHTML5: true,
      queueLimit: 1000,
      removeAfterUpload: false,
      maxFileSize: 100 * 1024 * 1024,
      headers: [
        {
          name: 'X-Requested-With',
          value: 'XMLHttpRequest'
        }
      ]
    });
    
    this.mediauploader.onBuildItemForm = (fileItem: any, form: FormData): any => {
    }

    this.mediauploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    }

    this.mediauploader.onAfterAddingFile = (file) => {
      console.log("file is ", file);
      var ext;
      if(file.file.type == "image/png") {
        ext = ".png";
      } else if (file.file.type == "image/jpeg") {
        ext = ".jpg";
      } else if (file.file.type == "video/mp4") {
        ext = ".mp4";
      } else if (file.file.type == "image/gif") {
        ext = ".gif";
      } else if (file.file.type == "image/svg+xml") {
        ext = ".svg";
      } else if (file.file.type == "audio/webm") {
        ext = ".webm";
      } else if (file.file.type == "video/webm") {
        ext = ".webm";
      } else if (file.file.type == "audio/mp3") {
        ext = ".mp3";
      } else if (file.file.type == "audio/wav") {
        ext = ".wav";
      } else if (file.file.type == "audio/ogg") {
        ext = ".ogg";
      }  else if (file.file.type == "video/ogg") {
        ext = ".ogg";
      }
      this.medianame = this.currentUser.username + "_" + (new Date).getTime() +  ext;
      file.file.name = this.medianame
      
    };
    this.mediauploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      console.log(item);
      console.log('Item');
      this.is_media_uploading = false;
      this.progress = 0;
      this.item_media = this.medianame;
      this.itemForm.controls.media.setValue(this.item_media)
    }; 
    
    this.mediauploader.onWhenAddingFileFailed = (item) => {
      setTimeout(() => {
        that.is_media_uploading = false;
        that.progress = 0;
      }, 1000);

      that.snackBar.open("Uploaded file error", "", { duration: 2000 });
    }

    this.mediauploader.onProgressItem = (progress: any) => {
      this.progress = progress['progress'];
      console.log(progress['progress']);
    };
    this.categoryList();
   }

   ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      var url = this.router.url.split("/");
      console.log(url)
      if(url[2] == 'add') {
        if(params.id) {
          this.collectionID = params.id
        }
        
      } else {
        if(params.id) {
          this.itemID = params.id;
          this.page_title = "Update Your Item";
          this.button_title = "Update"
          this.getItemInfo()
        } else {
          this.itemID = ""
        }
      }
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  /**
   * This is the function which used to retreive category list from api
   */
  categoryList = () => {
    this.itemService.categoryList().subscribe(result=>{
       this.categories = result.tempArray;
    })
  }

  /**
   * This is the function which used to retreive item detail from api
   */
  getItemInfo = () => {
    this.spinner = true
     this.itemService.listItem({
       page:1,
       type:'view',
       item_id: this.itemID
     }).subscribe(result=>{
       if(result.status == true) {
         this.itemInfo = result.tempArray[0];
         this.collectionID = this.itemInfo.collection_id._id;
         this.itemForm.controls.name.setValue(this.itemInfo.name);
         this.itemForm.controls.category_id.setValue(this.itemInfo.category_id._id)
         this.itemForm.controls.description.setValue(this.itemInfo.description)
         this.itemForm.controls.price.setValue(this.itemInfo.price)
         this.itemForm.controls.external_link.setValue(this.itemInfo.external_link)
         this.itemForm.controls.thumb.setValue(this.itemInfo.thumb);
         this.item_thumb = this.itemInfo.thumb
         this.itemForm.controls.media.setValue(this.itemInfo.media);
         this.item_media = this.itemInfo.media;
         this.attributes = this.itemInfo.attributes;
         this.levels = this.itemInfo.levels;
         this.stats = this.itemInfo.stats;
         this.itemForm.controls.unlock_content_url.setValue(this.itemInfo.unlock_content_url)
       }
       this.spinner = false;
     })
  }

  /**
   * This is the function which used to update item through api
   */
  updateItemApi = (params:any) => {
    this.itemService.updateItem(params).subscribe(result=>{
      if(result.status == true) {
         this.router.navigate(['collection/view/'+result.result.collection_id])
      }
      this.spinner = false;
      this.snackBar.open(result.message, "", { duration: 2000 });
    })
  }

  /**
   * This is the function which used to create item through api
   */
  itemCreateApi = (params:any) => {
     this.itemService.addItem(params).subscribe(result=>{
       if(result.status == true) {
          this.router.navigate(['collection/view/'+result.result.collection_id])
       }
       this.spinner = false;
       this.snackBar.open(result.message, "", { duration: 2000 });
     })
  }

  /**
   * This is the function which used to create item with validation
   */
  onSubmit(formData:any) {
    if (this.itemForm.valid) {
      if(this.item_thumb == '') {
        this.snackBar.open('Item thumb logo is required', "", { duration: 2000 });
        return
      }

      if(this.item_media == '') {
        this.snackBar.open('Item Media is required', "", { duration: 2000 });
        return
      }
      this.spinner = true;
      if(this.itemID!= "") {
        this.updateItemApi({
          name: formData.value.name,
          description: formData.value.description,
          price: formData.value.price,
          external_link: formData.value.external_link,
          media: formData.value.media,
          thumb: formData.value.thumb,
          stats: this.stats,
          attributes: this.attributes,
          levels: this.levels,
          category_id: formData.value.category_id,
          collection_id: this.collectionID,
          unlock_content_url: formData.value.unlock_content_url,
          item_id: this.itemID
        });
      } else {
        this.itemCreateApi({
          name: formData.value.name,
          description: formData.value.description,
          price: formData.value.price,
          external_link: formData.value.external_link,
          media: formData.value.media,
          thumb: formData.value.thumb,
          stats: this.stats,
          attributes: this.attributes,
          levels: this.levels,
          category_id: formData.value.category_id,
          collection_id: this.collectionID,
          unlock_content_url: formData.value.unlock_content_url
        });
      }

    } else {
      if (this.itemForm.controls.name.invalid) {
        if (this.itemForm.controls.name.errors) {
          if (this.itemForm.controls.name.errors.required) {
            this.snackBar.open('Name is required', "", { duration: 2000 });
          } else if (this.itemForm.controls.name.errors.minlength) {
            this.snackBar.open('Name required minimum 3 characters', "", { duration: 2000 });
          } else if (this.itemForm.controls.name.errors.maxlength) {
            this.snackBar.open('Name required maximum 255 characters', "", { duration: 2000 });
          } 
        }
      } else if (this.itemForm.controls.description.invalid) {
        if (this.itemForm.controls.description.errors) {
          if (this.itemForm.controls.description.errors.required) {
            this.snackBar.open('Description is required', "", { duration: 2000 });
          } else {
            this.snackBar.open('Description should be between 3 to 1000 characters', "", { duration: 2000 });
          }
        }
      } else if (this.itemForm.controls.price.invalid) {
        if (this.itemForm.controls.price.errors) {
          if (this.itemForm.controls.price.errors.required) {
            this.snackBar.open('Price is required', "", { duration: 2000 });
          } else {
            this.snackBar.open('Price should be numeric', "", { duration: 2000 });
          }
        }
      } else if (this.itemForm.controls.external_link.invalid) {
        if (this.itemForm.controls.external_link.errors) {
          if (this.itemForm.controls.external_link.errors.required) {
            this.snackBar.open('Link is required', "", { duration: 2000 });
          } else {
            this.snackBar.open('Link format is wrong', "", { duration: 2000 });
          }
        }
      }
    }
  }

  /**
   * This is the function which initiate thumb upload on image change
   */
  uploadThumb = () => {
    this.spinner = true;
    this.thumbuploader.uploadAll();
  }

  /**
   * This is the function which initiate medai upload on change
   */
  uploadMedia = () => {
    this.progress = 0;
    this.is_media_uploading = true;
    this.mediauploader.uploadAll();
  }

  /**
   * This is the function which remove thumb from screen
   */
  deleteThumb = () => {
    this.item_thumb = ""
    this.itemForm.controls.thumb.setValue("")
  }

  /**
   * This is the function which remove media from screen
   */
  deleteMedia = () => {
    this.item_media = ""
    this.itemForm.controls.media.setValue("")
  }

  /**
   * This is the function which used to cancel media file at the time of upload
   */
  cancelMedia() {
    this.is_media_uploading = true;
    this.progress = 0;
    this.mediauploader.cancelAll();
  }

  /**
   * This is the function which used to update property on submit
   */
  propertyAction = () => {
    if(this.propertyModalName.trim().length>0 && this.propertyModalType.trim().length>0) {
      this.attributes.push({
        type:this.propertyModalType,
        name: this.propertyModalName,
      })
      this.propertyModalType = "";
      this.propertyModalName = "";
      this.propertyModal.hide();
    } else {
      this.snackBar.open('Type and Name is required', "", { duration: 2000 });
    }
  }

  /**
   * This is the function which used to close property modal
   */
  propertyItemClose = (index:number) => {
    this.attributes.splice(index,1);
  }

  /**
   * This is the function which used to close level modal
   */
  levelItemClose = (index:number) => {
    this.levels.splice(index,1);
  }

  /**
   * This is the function which used to update level on submit
   */
  levelAction = () => {
    if(this.levelModalName.trim().length>0 && (this.levelModalValue<=this.levelModalValueOf)) {
      this.levels.push({
        name:this.levelModalName,
        value: this.levelModalValue,
        valueof: this.levelModalValueOf,
      })
      this.levelModalValueOf = ""
      this.levelModalValue = "";
      this.levelModalName = "";
      this.levelModal.hide();
    } else {
      this.snackBar.open('Name and Value is invalid', "", { duration: 2000 });
    }
  }

  /**
   * This is the function which used to update stat on submit
   */
  statAction = () => {
    if(this.statModalName.trim().length>0 && (this.statModalValue<=this.statModalValueOf)) {
      this.stats.push({
        name:this.statModalName,
        value: this.statModalValue,
        valueof: this.statModalValueOf,
      })
      this.statModalValueOf = ""
      this.statModalValue = "";
      this.statModalName = "";
      this.statModal.hide();
    } else {
      this.snackBar.open('Name and Value is invalid', "", { duration: 2000 });
    }
  }

  /**
   * This is the function which used to close stat modal
   */
  statItemClose = (index:number) => {
    this.stats.splice(index,1);
  }


}
