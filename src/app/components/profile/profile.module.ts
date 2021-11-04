/*
Project : Cryptotrades
FileName :  profile.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to load component and module realted to user page
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileRoutingModule } from './profile-routing.module';
import { MomentModule } from 'ngx-moment';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CollectedComponent } from './collected/collected.component';
import { CreatedComponent } from './created/created.component';
import { FavoritedComponent } from './favorited/favorited.component';
import { ActivityComponent } from './activity/activity.component';
import { OffersComponent } from './offers/offers.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NodataModule } from 'src/app/UI/nodata/nodata.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ItemskeletonModule } from 'src/app/UI/skeleton/itemskeleton/itemskeleton.module';
import { LoaderModule } from 'src/app/UI/loader/loader.module';
import { ItemModule } from 'src/app/UI/item/item.module';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ProfileRoutingModule,
    MatSnackBarModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
    AlertModule,
    PerfectScrollbarModule,
    NodataModule,
    InfiniteScrollModule,
    ItemskeletonModule,
    LoaderModule, 
    ItemModule,
  ],
  declarations: [CollectedComponent, CreatedComponent, FavoritedComponent, ActivityComponent, OffersComponent]
})
export class ProfileModule { }
