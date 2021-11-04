/*
Project : Cryptotrades
FileName :  viewcollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show collection view for all users
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { config } from 'src/app/constants/config';
import { CollectionService } from 'src/app/services/collection.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {ModalDirective} from 'ngx-bootstrap/modal';
import { ItemService } from 'src/app/services/item.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-viewcollection',
  templateUrl: './viewcollection.component.html',
  styleUrls: ['./viewcollection.component.css']
})
export class ViewcollectionComponent implements OnInit {
  spinner: boolean = false
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

  items:any = [];
  page:any = 1;
  isApiLoading:boolean = false;
  loading:boolean = true
  keyword:string = ""
  searchInput:string = "";
  @ViewChild('confirmationModal') public confirmationModal: ModalDirective;
  @ViewChild('confirmationItemModal') public confirmationItemModal: ModalDirective;
  selectedItem:any;
  constructor(
    private collectionService: CollectionService,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private snackBar: MatSnackBar,
  ) { 
    this.confirmationModal = this.confirmationItemModal =this.subscription;
    this.currentUser = this.userService.getUser();
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      if(params.id) {
        this.loading = true
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
   * This is the function which used to get collection detail from api
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
      this.ownCollection = (this.collectionInfo.author_id == this.currentUser.user_id) ? true : false;
      this.page = 1;
      this.getItemList();
    })
  }

   /**
   * This is the function which used to delete collection by id
   */
  deleteAction = ()=> {
    this.spinner = true
    this.confirmationModal.hide()
    this.collectionService.deleteCollection({
      collection_id: this.collectionID
    }).subscribe(result=>{
      this.spinner = false;
      this.router.navigate(["/collection/mycollection"])
    })
  }

  /**
   * This is the function which used to get item list by collection 
   */
  getItemList = () => {
    this.isApiLoading = true;
    var params = {
      page: this.page,
      type:'mycollection',
      collection_id: this.collectionInfo._id,
      keyword:this.keyword
    }
    console.log(this.page)
    this.itemService.listItem(params).subscribe(result=>{
      this.isApiLoading = false;
      console.log(result); 
      if(result.status == true) {
         if(this.page == 1) {
           this.items = result.tempArray
         } else {
           for (let index = 0; index < result.tempArray.length; index++) {
             const element = result.tempArray[index];
             this.items.push(element)
           }
         }
      }
     this.loading = false;
    })
  }

  /**
   * This is the function which used to get item list by collection on page scroll
   */
  onNextPage = () => {
    if(this.loading == true && this.isApiLoading == true ) {
      return;
    }
    this.page = this.page + 1;
    this.getItemList();
  }

  /**
   * This is the output function which used to navgate, edit and publish item
   */
  itemEvent = (event:any) => {
    if(event.type == "edit") {
      this.router.navigate(['/item/edit/'+event.item._id])
    } else if (event.type == "delete") {
      this.confirmationItemModal.show();
      this.selectedItem = event.item;
    } else if(event.type == "view") {
      this.router.navigate(['/item/view/'+event.item._id])
    } else if(event.type == "publish") {
      this.spinner = true;
      this.itemService.publishItem({
        item_id: event.item._id
      }).subscribe(result=>{
        if(result.status == true) {
          this.resetAction();
        }
        this.snackBar.open("Item published successfully", "", { duration: 2000 });
        this.spinner = false
      })
    }
  }

  /**
   * This is the  function which used to delete item and update item array
   */
  itemDeleteAction = () => {
    var index = this.items.findIndex((itemobj:any)=> {
      return itemobj._id == this.selectedItem._id
    })
    if(index != -1) {
      this.items.splice(index,1);
      this.itemService.deleteItem({
        item_id:this.selectedItem._id
      }).subscribe(result=>{
      })
    }
    this.confirmationItemModal.hide()
  }

  /**
   * This is the  function which used to search item by keyword with collection filter
   */
  searchAction = () => {
    this.loading = true;
    this.keyword = this.searchInput.replace(" ", "+")
    this.page = 1;
    this.getItemList();
  }

  /**
   * This is the  function which used to reset search by keyword with collection filter
   */
  resetAction = () => {
    this.loading = true;
    this.searchInput = "";
    this.keyword = "";
    this.searchAction();
  }

}
