/*
Project : Cryptotrades
FileName :  mycollection.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component which show collection list created by logged user
*/
import { Component, OnInit } from '@angular/core';
import { CollectionService } from 'src/app/services/collection.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-mycollection',
  templateUrl: './mycollection.component.html',
  styleUrls: ['./mycollection.component.css']
})
export class MycollectionComponent implements OnInit {
  loading:boolean = false;
  page:number = 1
  isApiLoading:boolean = false;
  collections:any = [];
  searchInput:string = '';
  keyword:string = ''

  constructor(
    private collectionService: CollectionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCollectionList();
  }

  getCollectionList = () => {
    this.isApiLoading = true;
    if(this.page==1) {
      this.loading = true
    }
    var params = {
      page: this.page,
      type:'my',
      keyword:this.keyword
    }
    this.collectionService.listCollection(params).subscribe(result=>{
      this.isApiLoading = false;
      console.log(result)
      if(result.status == true) {
         if(this.page == 1) {
           this.collections = result.tempArray
         } else {
           for (let index = 0; index < result.tempArray.length; index++) {
             const element = result.tempArray[index];
             this.collections.push(element)
           }
         }
      }
      this.loading = false;
    })
  }

  onNextPage = () => {
    if(this.loading == true || this.isApiLoading == true) {
      return;
    }
    this.page = this.page + 1;
    this.getCollectionList();
  }

  collectionEvent = (event:any) => {
    if (event.type == "view") {
      this.router.navigate(['/collection/view/' + event.item._id])
    } 
  }

  searchAction = () => {
    this.keyword = this.searchInput.replace(" ", "+")
    this.page = 1;
    this.getCollectionList();
  }

  resetAction = () => {
    this.searchInput = "";
    this.keyword = "";
    this.searchAction();
  }

}
