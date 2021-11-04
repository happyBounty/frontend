/*
Project : Cryptotrades
FileName :  collectionitem.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to define collection item related component and module
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionitemComponent } from "./collectionitem.component";
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    imports: [
        CommonModule,
        MatIconModule
    ],
    exports: [CollectionitemComponent],
    declarations: [CollectionitemComponent],
    providers: [],
})
export class CollectionitemModule {
}