/*
Project : Cryptotrades
FileName :  collections.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module which used to load collection related module and components
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { CollectionsRoutingModule } from './collections-routing.module';
import { MomentModule } from 'ngx-moment';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MycollectionComponent } from './mycollection/mycollection.component';
import { NodataModule } from 'src/app/UI/nodata/nodata.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CollectionskeletonModule } from 'src/app/UI/skeleton/collectionskeleton/collectionskeleton.module';
import { AddcollectionComponent } from './addcollection/addcollection.component';
import { FileUploadModule } from 'ng2-file-upload';
import { LoaderModule } from 'src/app/UI/loader/loader.module';
import { ViewcollectionComponent } from './viewcollection/viewcollection.component';
import { CollectionitemModule } from 'src/app/UI/collectionitem/collectionitem.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ItemskeletonModule } from 'src/app/UI/skeleton/itemskeleton/itemskeleton.module';
import { ItemModule } from 'src/app/UI/item/item.module';
import { DetailcollectionComponent } from './detailcollection/detailcollection.component';
import { GridskeletonModule } from 'src/app/UI/skeleton/gridskeleton/gridskeleton.module';
import { ActivitycollectionComponent } from './activitycollection/activitycollection.component';
@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CollectionsRoutingModule,
    MatSnackBarModule,
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
    CollectionskeletonModule,
    ItemskeletonModule,
    FileUploadModule,
    LoaderModule, 
    CollectionitemModule,
    ItemModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    GridskeletonModule
  ],
  declarations: [MycollectionComponent, AddcollectionComponent, ViewcollectionComponent, DetailcollectionComponent, ActivitycollectionComponent]
})
export class CollectionsModule { }
