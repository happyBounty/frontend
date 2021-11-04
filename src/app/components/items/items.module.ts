/*
Project : Cryptotrades
FileName :  items.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to load module and component related to items
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { ItemsRoutingModule } from './items-routing.module';
import { MomentModule } from 'ngx-moment';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NodataModule } from 'src/app/UI/nodata/nodata.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FileUploadModule } from 'ng2-file-upload';
import { LoaderModule } from 'src/app/UI/loader/loader.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AdditemComponent } from './additem/additem.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ViewitemComponent } from './viewitem/viewitem.component';
import { LightboxModule } from 'ngx-lightbox';
import { GridskeletonModule } from 'src/app/UI/skeleton/gridskeleton/gridskeleton.module';
import { ItemModule } from 'src/app/UI/item/item.module';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ItemsRoutingModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatDialogModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
    AlertModule.forRoot(),
    ModalModule.forRoot(),

    NodataModule,
    InfiniteScrollModule,
    FileUploadModule,
    LoaderModule, 
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    LightboxModule,
    GridskeletonModule,
    ItemModule, 
    NodataModule
  ],
  declarations: [AdditemComponent, ViewitemComponent]
})
export class ItemsModule { }
