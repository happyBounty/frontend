/*
Project : Cryptotrades
FileName :  wallet.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show user ethereum address and copy option
*/
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Clipboard } from "@angular/cdk/clipboard"
import { ItemService } from 'src/app/services/item.service';
import {MatDialog} from '@angular/material/dialog';
import { TransferComponent } from '../transfer/transfer.component';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  walletInput:string= ""
  currentUser:any;
  userInfo:any;
  walletAmount:number = 0;
  constructor(
    private userService: UserService,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar,
    private itemService: ItemService,
    public dialog: MatDialog,
  ) { 
    this.currentUser = this.userService.getUser();
    this.getProfileInfo();
    this.userBalance();
  }

  ngOnInit(): void {
  }

  /**
   * This is the function which used to get profile information of logged in user
   */
  getProfileInfo = () => {
    this.userService.viewProfile(this.currentUser.user_id).subscribe(result=>{
      var resulter:any = result;
      this.userInfo = resulter.result;
      console.log(this.userInfo)
      this.walletInput = this.userInfo.public_key;
    })
  }

  /**
   * This is the function which used to get balance from user ethereum wallet
   */
  userBalance = () => {
    this.itemService.checkBalance().subscribe(result=>{
       if(result.status == true) {
         this.walletAmount = result.return_id.toFixed(2);
       }
    })
  }

  /**
   * This is the function which open transfer component for withdrawal
   */
  tranferAction = () => {
    const dialogRef = this.dialog.open(TransferComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        if (result.type == "reload") {
          this.userBalance();
        }
      }
    });
  }

  /**
   * This is the function which used to compy ethereum address in clipboard
   */
  copyAddress=()=> {
    this.clipboard.copy(this.userInfo.public_key)
    this.snackBar.open('Ethereum address copied', "", { duration: 2000 });
 }

}
