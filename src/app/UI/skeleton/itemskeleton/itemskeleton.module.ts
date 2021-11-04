/*
Project : Cryptotrades
FileName :  itemskeleton.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to load component and module related to item skeleton
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemskeletonComponent } from "./itemskeleton.component";
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
    imports: [
        CommonModule,
        NgxSkeletonLoaderModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports: [ItemskeletonComponent],
    declarations: [ItemskeletonComponent],
    providers: [],
})
export class ItemskeletonModule {
}