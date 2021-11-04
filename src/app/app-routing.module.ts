/*
Project : Cryptotrades
FileName :  app-routing.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the main routing file which load all routes in the application
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotComponent } from './components/forgot/forgot.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetComponent } from './components/reset/reset.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatsComponent } from './components/stats/stats.component';
import { GuestGuard } from './guard/guest.guard';
import { UserGuard } from './guard/user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'marketplace',
    component: MarketplaceComponent,
  },
  {
    path: 'stats',
    component: StatsComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[GuestGuard]
  },
  {
    path: 'forgot',
    component: ForgotComponent,
    canActivate:[GuestGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[GuestGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate:[GuestGuard]
  },
  {
    path: 'reset',
    component: ResetComponent,
    canActivate:[UserGuard]
  },
  { path: 'profile/:id',
  component:ProfileComponent,
  loadChildren: () => import('./components/profile/profile.module').then(m => m.ProfileModule),},
  { path: 'settings',
  component:SettingsComponent,
  canActivate:[UserGuard],
  loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule),},
  { path: 'collection', loadChildren: () => import('./components/collections/collections.module').then(m => m.CollectionsModule),},
  { path: 'item', loadChildren: () => import('./components/items/items.module').then(m => m.ItemsModule),},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
