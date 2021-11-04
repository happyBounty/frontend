/*
Project : Cryptotrades
FileName :  favorited.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show favorited item in user profile
*/
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-favorited',
  templateUrl: './favorited.component.html',
  styleUrls: ['./favorited.component.css']
})
export class FavoritedComponent implements OnInit {

  currentUser:any;
  currentUserID:any;
  items:any = [];
  page:any = 1;
  isApiLoading:boolean = false;
  loading:boolean = true
  keyword:string = ""
  searchInput:string = "";
  constructor(
    private userService: UserService,
    private router: Router,
    private itemService: ItemService,
  ) { 
    this.currentUser = this.userService.getUser()
  }

  ngOnInit(): void {
      var url = this.router.url;
      this.currentUserID = url.replace('/favorited','').split("/").pop();
      this.items = [];
      this.page = 1;
      this.getItemList();
  }

  ngOnDestroy(): void {
  }

  /**
   * This is the function which used to retrieve favorited list from api
   */
  getItemList = () => {
    this.isApiLoading = true;
    var params = {
      page: this.page,
      user_id: this.currentUserID,
      keyword:this.keyword
    }
    this.itemService.listFavourites(params).subscribe(result=>{
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
   * This is the function which used to retrieve favorited list on page scroll
   */
  onNextPage = () => {
    if(this.loading == true && this.isApiLoading == true ) {
      return;
    }
    this.page = this.page + 1;
    this.getItemList();
  }

    /**
   * This is the output function which used to navigate user to item detail page
   */
  itemEvent = (event:any) => {
    if(event.type == "view") {
      this.router.navigate(['/item/view/'+event.item._id])
    } 
  }

}
