/*
Project : Cryptotrades
FileName :  detailcollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show detail page of collection with for collection owner
*/
import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/constants/config';
import { CollectionService } from 'src/app/services/collection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ItemService } from 'src/app/services/item.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-detailcollection',
  templateUrl: './detailcollection.component.html',
  styleUrls: ['./detailcollection.component.css']
})
export class DetailcollectionComponent implements OnInit {
  subscription:any;
  mediaBase:string = config.media_path;
  ownCollection:boolean = false;
  currentUser:any;
  collectionID:string = "";
  collectionInfo:any;
  collection_banner:string = "default.png"
  collection_logo:string = "default.png"
  collection_desc:string = "";
  collection_name:string = "";

  loading: boolean = true;

  recent:any = [];
  is_recent_viewall:boolean = false;
  minted:any = []
  is_minted_viewall:boolean = false;
  onauction:any = []
  is_onauction_viewall:boolean = false;
  constructor(
    private collectionService: CollectionService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private snackBar: MatSnackBar,
  ) { 
    this.currentUser = this.userService.getUser();
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      if(params.id) {
        this.collectionID = params.id;
        this.getCollectionInfo();
      } else {
        this.collectionID = ""
      }
      console.log(params) //log the entire params object
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  /**
   * This is the function which used to get collection detail
   */
  getCollectionInfo() {
    this.collectionService.viewCollection({
      collection_id:this.collectionID
    }).subscribe(result=>{
      this.collectionInfo = result.result;
      this.collection_banner = this.collectionInfo.banner;
      this.collection_logo = this.collectionInfo.image;
      this.collection_name = this.collectionInfo.name;
      this.collection_desc = this.collectionInfo.description;
      if(this.currentUser != null) {
        this.ownCollection = (this.collectionInfo.author_id == this.currentUser.user_id) ? true : false;
      }
      this.getItemCollectionList();
    })
  }


  /**
   * This is the function which used to show item list by collection
   */
  getItemCollectionList = () => {
    this.loading = true;
    var params = {
      collection_id: this.collectionInfo._id,
    }
    this.itemService.listByCollectionItem(params).subscribe(result=>{
      this.loading = false;
      if(result.status == true) {
          this.recent = result.data.recent;
          this.is_recent_viewall = (this.recent.length>4) ? true : false
          if(this.recent.length>4) {
              this.recent.splice(3,1)
          }
          this.minted = result.data.minted
          this.is_minted_viewall = (this.minted.length>4) ? true : false
          if(this.minted.length>4) {
              this.minted.splice(3,1)
          }
          this.onauction = result.data.onauction
          this.is_onauction_viewall = (this.onauction.length>4) ? true : false
          if(this.onauction.length>4) {
              this.onauction.splice(3,1)
          }
      }
     this.loading = false;
    })
  }

  /**
   * This is the output function which used to navigate user to detail page
   */
  itemEvent = (event:any) => {
    if(event.type == "view") {
      this.router.navigate(['/item/view/'+event.item._id])
    } 
  }  
  
  /**
   * This is the output function which used to navigate user to marketplace page
   */
  viewAllAction = (type:string) => {
    this.router.navigate(['/marketplace'],{ queryParams: { collection_id:this.collectionID,type:type  }})
  }

}
