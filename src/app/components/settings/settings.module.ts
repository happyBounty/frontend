/*
Project : Cryptotrades
FileName :  settings.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module which load component and module for setting 
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { SettingsRoutingModule } from './settings-routing.module';
import { MomentModule } from 'ngx-moment';
import { AlertModule } from 'ngx-bootstrap/alert';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { WalletComponent } from './wallet/wallet.component';
import { GeneralComponent } from './general/general.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { TransferComponent } from './transfer/transfer.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SettingsRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
    AlertModule
  ],
  declarations: [WalletComponent, GeneralComponent, ChangepasswordComponent, TransferComponent]
})
export class SettingsModule { }
