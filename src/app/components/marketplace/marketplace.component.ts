/*
Project : Cryptotrades
FileName :  marketplace.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show marketplace screen for user
*/
import { Component, OnInit } from '@angular/core';
import { config } from 'src/app/constants/config';
import { CollectionService } from 'src/app/services/collection.service';
import { ItemService } from 'src/app/services/item.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  subscription:any;
  isToggled:boolean = false;
  isOfferCollapsed:boolean = false;
  isPriceCollapsed:boolean = true;
  isCollectionCollapsed:boolean = true;
  isCategoryCollapsed:boolean = true;

  collectionSearchInput:string = ""
  searchRequest:any;
  collectionPage:any = 1;
  collections:any = [];
  mediaBase: string = config.media_path;
  categories:any = [];

  searchInput:string = ""
  items:any = [];
  page:any = 1;
  isApiLoading:boolean = false;
  loading:boolean = true
  keyword:string = ""
  type:string = "sort"
  value:string = "recent"
  page_title:string = "Recent Products"
  constructor(
    private collectionService : CollectionService,
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.searchCollectionAction();
    this.getCategories()
   }

  ngOnInit(): void {
    this.subscription = this.route.queryParams.subscribe(params => {
      console.log("filter",params)
      this.loading = true;
      if(params.type) {
         this.type = "sort";
         this.value = params.type
         if(params.type == "offer") {
           this.page_title = "Product with offer"
         } else if (params.type == "mostviewed") {
           this.page_title = "Most viewed product"
         } else if (params.type == "mostliked") {
           this.page_title = "Most liked product"
         } else {
           this.page_title = "Recent product"
         }
      }
      if(params.price) {
        this.type = "price";
        this.value = params.price
        this.page_title = "Products greater than " + this.value + " ETH"
      }
      if(params.category_id) {
        this.type = "category";
        this.value = params.category_id
      
      } 
      if(params.collection_id) {
        this.type = "collection";
        this.value = params.collection_id
        this.getCollectionInfo()
      }

      this.searchInput = "";
      this.items = [];
      this.page = 1;
      this.keyword = ""
      this.getItemList();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  /**
   * This is the function which used minimize and maximize sidebar 
   */
  minimizeMenu = () => {
    this.isToggled = this.isToggled ? false : true;
  }

  /**
   * This is the function which used search collection on textbox type
   */
  searchCollectionAction = () => {
    console.log("search value ", this.collectionSearchInput)
    if(this.searchRequest) {
      this.searchRequest.unsubscribe();
    }
    this.collectionPage = 1;
    this.searchRequest = this.collectionService.listCollection({
      type:"all",
      keyword: this.collectionSearchInput,
      page: this.collectionPage
    }).subscribe(result=>{
      if(result.status == true) {
        this.collections = result.tempArray
      }
    })
  }

  /**
   * This is the function which used to retreive category list from api
   */
  getCategories = () => {
    this.itemService.categoryList().subscribe(result=>{
      if(result.status == true) {
        this.categories = result.tempArray
        if (this.type == "category") {
          var index = this.categories.findIndex((category:any) => {
              return category._id == this.value
          })
          if(index != -1) {
            this.page_title = "Search product by category - " + this.categories[index].title 
          }
        }
      }
    })
  }

  /**
   * This is the function which used to retreive item list from api
   */
  getItemList = () => {
    this.isApiLoading = true;
    var params = {}
    if(this.type == "sort") {
      params = {
        page: this.page,
        type: this.value,
        keyword:this.keyword
      }
    } else if (this.type == "collection") {
      params = {
        page: this.page,
        type: "collection",
        collection_id: this.value,
        keyword:this.keyword
      }
    } else if (this.type == "category") {
      params = {
        page: this.page,
        type: "category",
        category_id: this.value,
        keyword:this.keyword
      }
    } else if (this.type == "price") {
      params = {
        page: this.page,
        type: "price",
        price_range: this.value,
        keyword:this.keyword
      }
    }

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
   * This is the function which used to retreive collection info on sorting
   */
  getCollectionInfo() {
    this.collectionService.viewCollection({
      collection_id:this.value
    }).subscribe(result=>{
      this.page_title = "Search product by collection - " + result.result.name
    })
  }


   /**
   * This is the function which used to retreive item list on page scroll
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


  /**
   * This is the function triggered when user click search button
   */
  searchAction = () => {
    this.loading = true;
    this.keyword = this.searchInput.replace(" ", "+")
    this.page = 1;
    this.getItemList();
  }

  /**
   * This is the function triggered when user click reset button
   */
  resetAction = () => {
    this.loading = true;
    this.searchInput = "";
    this.keyword = "";
    this.searchAction();
  }

  /**
   * This is the function triggered when user filter the item by category
   */
  categoryAction = (item:any) => {
    var index = this.categories.findIndex((category:any) => {
      return category._id == item._id
    })
    if(index != -1) {
      console.log("je")
      this.page_title = "Search product by category - " + this.categories[index].title 
    }
  }

}
