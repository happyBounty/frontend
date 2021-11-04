/*
Project : Cryptotrades
FileName :  collections-routing.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the routing module which used to define collection related routes
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from 'src/app/guard/user.guard';
import { ActivitycollectionComponent } from './activitycollection/activitycollection.component';
import { AddcollectionComponent } from './addcollection/addcollection.component';
import { DetailcollectionComponent } from './detailcollection/detailcollection.component';
import { MycollectionComponent } from './mycollection/mycollection.component';
import { ViewcollectionComponent } from './viewcollection/viewcollection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'mycollection',
    pathMatch: 'full',
  },
  {
    path: 'mycollection',
    component: MycollectionComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'add',
    component: AddcollectionComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'edit/:id',
    component: AddcollectionComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'view/:id',
    component: ViewcollectionComponent
  },
  {
    path: 'detail/:id',
    component: DetailcollectionComponent
  },
  {
    path: 'activity/:id',
    component: ActivitycollectionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionsRoutingModule {}
