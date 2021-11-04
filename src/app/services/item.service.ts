/*
Project : Cryptotrades
FileName :  item.service.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the service which used to handle all api calls realted to item
*/
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from "rxjs";
import { map} from 'rxjs/operators';
import {Common} from '../models/common';
import {API} from '../constants/api'
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  public notifier: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    private http: HttpClient
  ) { }

  checkBalance(): Observable<Common> {
    let url = API.base_url + API.item_check_balance;
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserialize(param)));
  }

  transferBalance(params:any): Observable<Common> {
    let url = API.base_url + API.item_transfer_balance;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  categoryList(): Observable<Common> {
    let url = API.base_url + API.category_list;
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserializeCategoryList(param)));
  }

  addItem(params:any): Observable<Common> {
    let url = API.base_url + API.item_add;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  updateItem(params:any): Observable<Common> {
    let url = API.base_url + API.item_update;
    return this.http.put<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  deleteItem(params:any): Observable<Common> {
    let url = API.base_url + API.item_delete;
    return this.http.request<Common>('delete',url, {body:params}).pipe(map((param:any) => new Common().deserialize(param)));
  }

  publishItem(params:any): Observable<Common> {
    let url = API.base_url + API.item_publish;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  purchaseItem(params:any): Observable<Common> {
    let url = API.base_url + API.item_purchase;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  addOffer(params:any): Observable<Common> {
    let url = API.base_url + API.item_offer_add;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  removeOffer(params:any): Observable<Common> {
    let url = API.base_url + API.item_offer_remove;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  actionOffer(params:any): Observable<Common> {
    let url = API.base_url + API.item_offer_action;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }




  listItem(params:any): Observable<Common> {
    var url = API.base_url + API.item_list + '?';
    if(params.page) {
      url = url + "page=" + params.page
    }
    if(params.type) {
      url = url + "&&type=" + params.type
    }
    if(params.user_id) {
      url = url + "&&user_id=" + params.user_id
    }
    if(params.item_id) {
      url = url + "&&item_id=" + params.item_id
    }
    if(params.price_range) {
      url = url + "&&price_range=" + params.price_range
    }
    if(params.category_id) {
      url = url + "&&category_id=" + params.category_id
    }
    if(params.collection_id) {
      url = url + "&&collection_id=" + params.collection_id
    }
    if(params.keyword) {
      url = url + "&&keyword=" + params.keyword
    }
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserializeItemList(param)));
  }

  addViews(params:any): Observable<Common> {
    let url = API.base_url + API.item_views_add;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  listFavourites(params:any): Observable<Common> {
    var url = API.base_url + API.item_favourite_list + '?';
    if(params.user_id) {
      url = url + "user_id=" + params.user_id
    }
    if(params.item_id) {
      url = url + "&&item_id=" + params.item_id
    }
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserializeFavouriteList(param)));
  }

  listByCollectionItem(params:any): Observable<Common> {
    var url = API.base_url + API.item_listbycollection + '?';
    if(params.collection_id) {
      url = url + "collection_id=" + params.collection_id
    }
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserialize(param)));
  }

  moreCollection(params:any): Observable<Common> {
    var url = API.base_url + API.item_more_collection + '?';
    if(params.collection_id) {
      url = url + "collection_id=" + params.collection_id
    }
    if(params.item_id) {
      url = url + "&&item_id=" + params.item_id
    }
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserialize(param)));
  }

  addLike(params:any): Observable<Common> {
    let url = API.base_url + API.item_like_add;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  addReport(params:any): Observable<Common> {
    let url = API.base_url + API.item_report;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  getHistory(params:any): Observable<Common> {
    var url = API.base_url + API.item_history + '?';
    if(params.type) {
      url = url + "type=" + params.type
    }
    if(params.item_id) {
      url = url + "&&item_id=" + params.item_id
    }
    if(params.collection_id) {
      url = url + "&&collection_id=" + params.collection_id
    }
    if(params.user_id) {
      url = url + "&&user_id=" + params.user_id
    }
    if(params.page) {
      url = url + "&&page=" + params.page
    }
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserializeHistoryList(param)));
  }

  getPrices(params:any): Observable<Common> {
    var url = API.base_url + API.item_prices + '?';
    if(params.page) {
      url = url + "page=" + params.page
    }
    if(params.item_id) {
      url = url + "&&item_id=" + params.item_id
    }
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserializePriceList(param)));
  }

  getOffers(params:any): Observable<Common> {
    var url = API.base_url + API.item_offers + '?';
    if(params.page) {
      url = url + "page=" + params.page
    }
    if(params.type) {
      url = url + "&&type=" + params.type
    }
    if(params.item_id) {
      url = url + "&&item_id=" + params.item_id
    }
    if(params.user_id) {
      url = url + "&&user_id=" + params.user_id
    }
    return this.http.get<Common>(url).pipe(map((param:any) => new Common().deserializeOfferList(param)));
  }

}
 