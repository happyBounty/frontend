/*
Project : Cryptotrades
FileName :  loader.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to set loader related component and module
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from "./loader.component";
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        MatProgressSpinnerModule
    ],
    exports: [LoaderComponent],
    declarations: [LoaderComponent],
    providers: [],
})
export class LoaderModule {
}