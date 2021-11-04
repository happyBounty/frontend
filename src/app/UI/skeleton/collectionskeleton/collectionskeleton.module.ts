/*
Project : Cryptotrades
FileName :  collectionskeleton.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to load component and module related to collection skeleton
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionskeletonComponent } from "./collectionskeleton.component";
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
    exports: [CollectionskeletonComponent],
    declarations: [CollectionskeletonComponent],
    providers: [],
})
export class CollectionskeletonModule {
}