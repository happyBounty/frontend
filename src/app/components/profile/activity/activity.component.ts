/*
Project : Cryptotrades
FileName :  activity.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show activiy screen in user profile
*/
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { ItemService } from 'src/app/services/item.service';
import { config } from 'src/app/constants/config';
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  mediaBase:string = config.media_path;
  blockChainName:string = config.blockchain;
  blockChainExplorer:string = config.blockchain_url;
  currentUser:any;
  currentUserID:any;
  histories: any = []
  historyLoading:boolean = true;
  pageHistory:number = 1
  totalHistoryDocs:any = 0;
  limitHistory:any = 10;
  hasNextHistoryPage:boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private itemService: ItemService,
  ) { 
    this.currentUser = this.userService.getUser()
  }

  ngOnInit(): void {
    var url = this.router.url;
    this.currentUserID = url.replace('/activity','').split("/").pop();
    this.getHistoryList();
  }

  /**
   * This is the function which used to retrieve activity list by user profile from api
   */
  getHistoryList = () => {
    this.historyLoading = true;
    var params = {
      type:"profile",
      user_id: this.currentUserID,
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
   * This is the function which used to retrieve activity list by user profile on next page click
   */
  nextHistoryPage = () => {
    this.pageHistory = this.pageHistory + 1;
    this.getHistoryList();
  }

  /**
   * This is the function which used to retrieve activity list by user profile on previous page click
   */
  prevHistoryPage = () => {
    this.pageHistory = this.pageHistory - 1;
    this.getHistoryList();
  }


}
