/*
Project : Cryptotrades
FileName :  profile-routing.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the routing module which used to load profile related routes
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityComponent } from './activity/activity.component';
import { CollectedComponent } from './collected/collected.component';
import { CreatedComponent } from './created/created.component';
import { FavoritedComponent } from './favorited/favorited.component';
import { OffersComponent } from './offers/offers.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'collected',
    pathMatch: 'full',
  },
  {
    path: 'collected',
    component: CollectedComponent
  },
  {
    path: 'created',
    component: CreatedComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'activity',
    component: ActivityComponent
  },
  {
    path: 'favorited',
    component: FavoritedComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
