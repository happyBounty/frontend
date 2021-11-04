/*
Project : Cryptotrades
FileName :  app.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the main module file which load all component and module to the application
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialLoginModule, SocialAuthServiceConfig
} from 'angularx-social-login';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import {AuthInterceptor} from './services/auth-interceptor'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './components/home/home.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { StatsComponent } from './components/stats/stats.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { ProfileComponent } from './components/profile/profile.component';
import { config } from './constants/config';
import { FileUploadModule } from 'ng2-file-upload';
import { MomentModule } from 'ngx-moment';
import {
  AppAsideModule,
  AppSidebarModule,
} from '@coreui/angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { LoaderModule } from './UI/loader/loader.module';
import { SettingsComponent } from './components/settings/settings.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ItemskeletonModule } from './UI/skeleton/itemskeleton/itemskeleton.module';
import { NodataModule } from './UI/nodata/nodata.module';
import { ItemModule } from './UI/item/item.module';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketplaceComponent,
    StatsComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    ResetComponent,
    ProfileComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    SocialLoginModule,
    AppAsideModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    FileUploadModule,
    LoaderModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions: {
        'm': 59
      }
    }),
    AlertModule.forRoot(),
    ItemskeletonModule,
    NodataModule,
    ItemModule,
    InfiniteScrollModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    IconSetService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              config.google_client_id
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(config.facebook_client_id)
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
