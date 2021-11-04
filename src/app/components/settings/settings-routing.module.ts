/*
Project : Cryptotrades
FileName :  settings-routing.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the routing module which used to load routes for setting module
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { GeneralComponent } from './general/general.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'wallet',
    pathMatch: 'full',
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'changepassword',
    component: ChangepasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
