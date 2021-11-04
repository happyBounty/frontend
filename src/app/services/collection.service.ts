/*
Project : Cryptotrades
FileName :  collection.service.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the service which used to handle all api calls realted to collection
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
export class CollectionService {
  public notifier: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  constructor(
    private http: HttpClient
  ) { }

  addCollection(params:any): Observable<Common> {
    let url = API.base_url + API.collection_add;
    return this.http.post<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  updateCollection(params:any): Observable<Common> {
    let url = API.base_url + API.collection_update;
    return this.http.put<Common>(url, params).pipe(map((param:any) => new Common().deserialize(param)));
  }

  viewCollection(params:any): Observable<Common> {
    var url = API.base_url + API.collection_detail + '?';
    if(params.collection_id) {
      url = url + 'collection_id='+params.collection_id
    }
    return this.http.get<Common>(url, params).pipe(map((param:any) => new Common().deserializeCollectionView(param)));
  }

  deleteCollection(params:any): Observable<Common> {
    let url = API.base_url + API.collection_delete
    return this.http.request<Common>('delete',url, {body:params}).pipe(map((param:any) => new Common().deserialize(param)));
  }

  listCollection(params:any): Observable<Common> {
    var url = API.base_url + API.collection_list + "?";
    if(params.page) {
      url = url + "page="+ params.page
    }
    if(params.keyword) {
      url = url + "&&keyword="+ params.keyword
    }
    if(params.type) {
      url = url + "&&type="+ params.type
    }
    return this.http.get<Common>(url, params).pipe(map((param:any) => new Common().deserializeCollectionList(param)));
  }

}
 