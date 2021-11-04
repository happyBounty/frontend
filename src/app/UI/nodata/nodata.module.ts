/*
Project : Cryptotrades
FileName :  nodata.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to set nodata related component and module
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NodataComponent } from "./nodata.component";
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [NodataComponent],
    declarations: [NodataComponent],
    providers: [],
})
export class NodataModule {
}