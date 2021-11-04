/*
Project : Cryptotrades
FileName :  transfer.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show withdrawal screen for user
*/
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ItemService } from 'src/app/services/item.service';
@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  button_title:string = "Transfer";
  transferForm: FormGroup;
  constructor(
    public formbuilder: FormBuilder,
    public dialogRef: MatDialogRef<TransferComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackBar: MatSnackBar,
    private itemService:ItemService
  ) { 
    this.transferForm = formbuilder.group({
      'eth_address': [null, Validators.compose([Validators.required])],
      'amount': [null,Validators.compose([Validators.required, Validators.pattern("^[0-9]+(.[0-9]{0,5})?$")])]
    })
  }

  ngOnInit(): void {
  }

  /**
   * This is the function which used to send ethereum outside with validation
   */
  onSubmit(formData: any) {
    if (this.transferForm.valid && this.button_title == "Transfer") {
      this.button_title = "Transferring";
      this.transferApi({
        eth_address:formData.value.eth_address,
        amount: formData.value.amount,
      });
    } else {
      if (this.transferForm.controls.eth_address.invalid) {
        if (this.transferForm.controls.eth_address.errors) {
          if (this.transferForm.controls.eth_address.errors.required) {
            this.snackBar.open('Ethereum address is required', "", { duration: 2000 });
          } 
        }
      } else if (this.transferForm.controls.amount.invalid) {
        if (this.transferForm.controls.amount.errors) {
          if (this.transferForm.controls.amount.errors.required) {
            this.snackBar.open('Ethereum value is required', "", { duration: 2000 });
          } else {
            this.snackBar.open('Ethereum value should be numeric', "", { duration: 2000 });
          } 
        }
      }
    }
  }

  /**
   * This is the function which used to send ethereum outside through api
   */
  transferApi = (params:any) => {
     this.itemService.transferBalance(params).subscribe(result=>{
       if(result.status == true) {
         this.dialogRef.close({type:'reload'});
       }
       this.snackBar.open(result.message, "", { duration: 2000 });
       this.button_title = "Transfer"
     })
  }

  /**
   * This is the function which used to close transfer dialog
   */
  closePop = () => {
    this.dialogRef.close();
  }
}
