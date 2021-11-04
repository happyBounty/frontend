/*
Project : Cryptotrades
FileName :  viewitem.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show view item screen for user
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { config } from 'src/app/constants/config';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ItemService } from 'src/app/services/item.service';
import { Lightbox } from 'ngx-lightbox';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ModalDirective} from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
  @ViewChild('reportModal') public reportModal: ModalDirective;
  reportMessage:string = "";

  @ViewChild('offerModal') public offerModal: ModalDirective;
  priceInput:any = "";

  subscription:any;
  mediaBase:string = config.media_path;
  blockChainName:string = config.blockchain;
  blockChainExplorer:string = config.blockchain_url;
  itemID:any = ''
  itemInfo:any;
  item_thumb:any = ''
  token_id:any = ''
  currentUser:any;
  spinner:boolean = false;
  attributes: any = []
  stats:any = [];
  levels:any = [];
  isDescCollapsed:boolean = false;
  isPropertyCollapsed:boolean = true;
  isStatCollapsed:boolean = true;
  isLevelCollapsed:boolean = true;
  isCollectionCollapsed:boolean = true
  isDetailCollapsed:boolean = true;
  isPriceCollapsed:boolean = false;
  isOfferCollapsed:boolean = false;
  isHistoryCollapsed:boolean = false;
  isMoreCollapsed:boolean = false;
  showMedia:boolean = false;
  is_liked:boolean = false;
  is_owner:boolean = false;

  morecollection:any = [];
  moreloading:boolean = true;
  is_morecollection_viewall:boolean = false

  histories: any = []
  historyLoading:boolean = true;
  pageHistory:number = 1
  totalHistoryDocs:any = 0;
  limitHistory:any = 10;
  hasNextHistoryPage:boolean = false;

  prices: any = []
  priceLoading:boolean = true;
  pagePrice:number = 1
  totalPriceDocs:any = 0;
  limitPrice:any = 10;
  hasNextPricePage:boolean = false;

  offers: any = []
  offerLoading:boolean = true;
  pageOffer:number = 1
  totalOfferDocs:any = 0;
  limitOffer:any = 10;
  hasNextOfferPage:boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private itemService: ItemService,
    private _lightbox: Lightbox,
    private snackBar: MatSnackBar,
  ) {
    this.reportModal = this.offerModal = this.subscription
    this.currentUser = this.userService.getUser()
   }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      if(params.id) {
        this.itemID = params.id;
        this.initFields()
      } else {
        this.itemID = ""
      }
    });
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  /**
   * This is the function which used to reset all values before load data from api
   */
  initFields = () => {
    this.moreloading = true;
    this.morecollection = [];

    this.pageHistory = 1;
    this.histories = [];

    this.pagePrice = 1;
    this.prices = [];

    this.pageOffer = 1;
    this.offers = []
    
    this.getItemInfo()
    if(this.currentUser != null) {
      this.viewItem();
    }
  }

  /**
   * This is the function which used to get item detail from api
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
         this.item_thumb = this.itemInfo.thumb
         this.attributes = this.itemInfo.attributes;
         this.levels = this.itemInfo.levels;
         this.stats = this.itemInfo.stats;
         if(this.currentUser != null) {
            if(this.itemInfo.unlock_content_url == 'true' || (this.itemInfo.current_owner._id == this.currentUser.user_id)) {
              this.showMedia = true
            } else {
              this.showMedia = false;
            }
         }

         if(this.currentUser != null) {
           console.log("return id ",result.return_id)
           this.is_liked = result.return_id == 0 ? false : true;
           this.is_owner = (this.currentUser.user_id == this.itemInfo.current_owner._id) ? true : false
         }

         if(this.itemInfo.status == "active") {
            this.token_id = parseInt(this.itemInfo.token_id)
         } else{
            this.token_id = ''
         }

         this.getMoreCollection();
         this.getHistoryList();
         this.getPriceList();
         this.getOfferList();
         
       }
       this.spinner = false;
     })
  }

  /**
   * This is the function which used to get collection list by same autor who created the item
   */
  getMoreCollection = () => {
    this.itemService.moreCollection({
      collection_id: this.itemInfo.collection_id._id,
      item_id: this.itemInfo._id
    }).subscribe(result=>{
      if(result.status == true) {
         this.morecollection = result.data
         this.is_morecollection_viewall = (this.morecollection.length>4) ? true : false
         if(this.morecollection.length>4) {
             this.morecollection.splice(3,1)
         }
      }
      this.moreloading = false;
    })
  }

  /**
   * This is the output function which used to navigate user to item detail
   */
  itemEvent = (event:any) => {
    if(event.type == "view") {
      this.router.navigate(['/item/view/'+event.item._id])
    } 
  } 

  /**
   * This is the function which used to add viewers count in api
   */
  viewItem = () => {
    this.itemService.addViews({
      item_id: this.itemID
    }).subscribe(result=>{
    })
  }

  /**
   * This is the function which used to show image in popup
   */
  openImage() {
    this._lightbox.open([{
      src: this.mediaBase + '/images/item/thumb/'+ this.itemInfo.thumb,
      caption: '',
      thumb: this.mediaBase + '/images/item/thumb/'+ this.itemInfo.thumb
    }], 0);
  }

   /**
   * This is the function which used to open collection detail 
   */
  openCollection = () => {
    this.router.navigate(["/collection/detail/" + this.itemInfo.collection_id._id])
  }

  /**
   * This is the function which used to show marketplace scree
   */
  viewByCategory = () => {
    console.log(this.itemInfo.category_id._id);
    this.router.navigate([ '/marketplace' ], { queryParams: { category_id:this.itemInfo.category_id._id  } })
  }

  /**
   * This is the function which used like the item by user
   */
  likeAction = () => {
    if(this.currentUser == null) {
      this.snackBar.open("Please login to continue", "", { duration: 2000 });
      return;
    }
    this.is_liked = this.is_liked ? false : true;
    this.itemService.addLike({
      item_id: this.itemID,
      type: this.is_liked ? 'increase' : 'decrease'
    }).subscribe(result=>{

    })
  }

  /**
   * This is the function which used to open external link
   */
  openExternalLink = () => {
    var pattern = /^((http|https|ftp):\/\/)/;
    var url = this.itemInfo.external_link
    if(!pattern.test(url)) {
        url = "http://" + url;
    }
    window.open( url, "_blank")
  }

  /**
   * This is the function which used to send report for item as email to admin
   */
  reportAction = () => {
    if(this.currentUser == null) {
      this.snackBar.open("Please login to continue", "", { duration: 2000 });
      this.reportModal.hide();
      return
    }

    if(this.reportMessage.trim().length>0) {
       this.reportModal.hide();
       var message = this.reportMessage;
       this.reportMessage = "";
       this.itemService.addReport({
         message: message,
         item_id: this.itemID
       }).subscribe(result=>{
       })
    } else {
      this.snackBar.open("Report message is required", "", { duration: 2000 });
    }
  }


  /**
   * This is the function which used to retreive activity list by item through api
   */
  getHistoryList = () => {
    this.historyLoading = true;
    var params = {
      type:"item",
      item_id: this.itemID,
      page: this.pageHistory
    }
    this.itemService.getHistory(params).subscribe(result=>{
      if(result.status == true) {
         this.histories = result.tempArray
         if(result.data.totalDocs > (result.data.offset + result.tempArray.length)) {
          this.hasNextHistoryPage = true;
         } else {
          this.hasNextHistoryPage = false;
         }
      } else {
        this.hasNextHistoryPage = false;
      }
      this.historyLoading = false;
    })
  }

  /**
   * This is the function which used to retreive activity list by item through api on next page click
   */
  nextHistoryPage = () => {
    this.pageHistory = this.pageHistory + 1;
    this.getHistoryList();
  }

  /**
   * This is the function which used to retreive activity list by item through api on previous page click
   */
  prevHistoryPage = () => {
    this.pageHistory = this.pageHistory - 1;
    this.getHistoryList();
  }


  /**
   * This is the function which used to retreive price list by item through api
   */
  getPriceList = () => {
    this.priceLoading = true;
    var params = {
      item_id: this.itemID,
      page: this.pagePrice
    }
    this.itemService.getPrices(params).subscribe(result=>{
      if(result.status == true) {
         this.prices = result.tempArray
         if(result.data.totalDocs > (result.data.offset + result.tempArray.length)) {
          this.hasNextPricePage = true;
         } else {
          this.hasNextPricePage = false;
         }
      } else {
        this.hasNextPricePage = false;
      }
      this.priceLoading = false;
    })
  }

  /**
   * This is the function which used to retreive price list by item through api on next page click
   */
  nextPricePage = () => {
    this.pagePrice = this.pagePrice + 1;
    this.getPriceList();
  }

  /**
   * This is the function which used to retreive price list by item through api on previous page click
   */
  prevPricePage = () => {
    this.pagePrice = this.pagePrice - 1;
    this.getPriceList();
  }


  /**
   * This is the function which used to retreive offer list by item through api 
   */
  getOfferList = () => {
    this.offerLoading = true;
    var params = {
      item_id: this.itemID,
      type:"item",
      page: this.pageOffer
    }
    this.itemService.getOffers(params).subscribe(result=>{
      if(result.status == true) {
         this.offers = result.tempArray
         if(result.data.totalDocs > (result.data.offset + result.tempArray.length)) {
          this.hasNextOfferPage = true;
         } else {
          this.hasNextOfferPage = false;
         }
      } else {
        this.hasNextOfferPage = false;
      }
      this.offerLoading = false;
    })
  }

  /**
   * This is the function which used to retreive offer list by item through api on next page click
   */
  nextOfferPage = () => {
    this.pageOffer = this.pageOffer + 1;
    this.getOfferList();
  }

  /**
   * This is the function which used to retreive offer list by item through api on previous page click
   */
  prevOfferPage = () => {
    this.pageOffer = this.pageOffer - 1;
    this.getOfferList();
  }

  /**
   * This is the function which used to buy nft item directly
   */
  buyNFT = () => {
    if(this.currentUser == null) {
      this.snackBar.open("Please login to continue", "", { duration: 2000 });
      return
    }
    this.spinner = true;
    this.itemService.purchaseItem({
      item_id : this.itemID
    }).subscribe(result=>{
      this.spinner = false;
      if(result.status == true) {
        this.initFields();
      }
      this.snackBar.open(result.message, "", { duration: 2000 });
    })
  }

  /**
   * This is the function which used to open offer
   */
  openOffer = () => {
    if(this.currentUser == null) {
      this.snackBar.open("Please login to continue", "", { duration: 2000 });
      return
    }
    this.offerModal.show();
  }


  /**
   * This is the function which used to add new offer with validation
   */
  addOfferAction = () => {
    if(!isNaN(this.priceInput)){
      if(this.priceInput>0) {
        this.spinner = true;
        this.itemService.addOffer({
          item_id: this.itemID,
          price: this.priceInput
        }).subscribe(result=>{
          this.offerModal.hide();
          this.spinner = false;
          if(result.status == true) {
            this.initFields()
          }
          this.snackBar.open(result.message, "", { duration: 2000 });
        })
      } else {
        this.snackBar.open("Price should be greater than zero", "", { duration: 2000 });
      }
    } else {
      this.snackBar.open("Price should be numeric", "", { duration: 2000 });
    }
  }

  /**
   * This is the function which used to delete offer from detail page
   */
  deleteMyOffer = (offer:any) => {
    var index = this.offers.findIndex((offer:any)=>{
      return offer.sender._id == this.currentUser._id
    })
    if(index = -1) {
      this.offers.splice(index,1)
    }
    this.itemService.removeOffer({
      offer_id:offer._id,
      item_id: this.itemID
    }).subscribe(result=>{

    })
  }

  /**
   * This is the function which used to cancel offer from detail page
   */
  cancelOffer = (offer:any) => {
    var index = this.offers.findIndex((offer:any)=>{
      return offer.receiver._id == this.currentUser._id
    })
    if(index = -1) {
      this.offers.splice(index,1)
    }
    this.itemService.actionOffer({
      offer_id:offer._id,
      item_id: this.itemID,
      type:'cancel'
    }).subscribe(result=>{

    })
  }

  /**
   * This is the function which used to accept offer from detail page
   */
  acceptOffer = (offer:any) => {
    this.spinner = true
    this.itemService.actionOffer({
      offer_id:offer._id,
      item_id: this.itemID,
      type:'accept'
    }).subscribe(result=>{
      this.spinner = false;
      if(result.status == true) {
        this.initFields()
      }
      this.snackBar.open(result.message, "", { duration: 2000 });
    })
  }
}
