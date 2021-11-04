/*
Project : Cryptotrades
FileName :  home.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show home screen for user
*/
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router'
import { CollectionService } from 'src/app/services/collection.service';
import { ItemService } from 'src/app/services/item.service';
import { config } from 'src/app/constants/config';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  mediaBase:string = config.media_path
  currentUser:any;
  collectionMenu:string = "";
  collections:any = [];
  collectionItems:any = [];
  loading:boolean = true;
  categories:any = []
  constructor(
    private userService: UserService,
    private router: Router,
    private collectionService: CollectionService,
    private itemService: ItemService
  ) {
    this.currentUser = this.userService.getUser();
    this.getCollection();
    this.getCategory();
   }

  ngOnInit(): void {
  }

  /**
   * This is the function which navigate uswer to login and marketplace on button click
   */
  openCreate = () =>{
    if(this.currentUser == null) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/collection/mycollection"]);
    }
  }

  /**
   * This is the function which load item by collection on tab click
   */
  getCollection = () => {
    var params = {
      page: 1,
      type:'item',
    }
    this.collectionService.listCollection(params).subscribe(result=>{
      if(result.status == true) {
          for (let index = 0; index < result.tempArray.length; index++) {
            const element = result.tempArray[index];
            this.collections.push(element);
            if(index == 6) {
              break;
            }
          }
          this.showItemByCollection(this.collectionMenu)
      }
    })
  }

  /**
   * This is the function which load item by collection on tab click
   */
  showItemByCollection = (id:any) => {
    this.loading = true;
    this.collectionMenu = id;
    var params = {}
    if(this.collectionMenu == "") {
      params = {
        page: 1,
        type: "recent",
        keyword:""
      }
    } else{
      params = {
        page: 1,
        type: "collection",
        collection_id: this.collectionMenu,
        keyword:""
      }
    } 

    this.itemService.listItem(params).subscribe(result=>{
      console.log(result); 
      if(result.status == true) {
        this.collectionItems = [];
        for (let index = 0; index < result.tempArray.length; index++) {
          const element = result.tempArray[index];
          this.collectionItems.push(element)
          if(index == 5) {
            break;
          }
        }
      }
     this.loading = false;
    })
  }

  /**
   * This is the output function which used to navigate user to item detail page
   */
  itemEvent = (event:any) => {
    if(event.type == "view") {
      this.router.navigate(['/item/view/'+event.item._id])
    }
  }

  /**
   * This is the function which used to get category list from api
   */
  getCategory = () => {
    this.itemService.categoryList().subscribe(result=>{
      for (let index = 0; index < result.tempArray.length; index++) {
        const element = result.tempArray[index];
        this.categories.push(element)
        if(index == 7) {
          break;
        }
      }
    })
  }


}
