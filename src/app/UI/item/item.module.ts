/*
Project : Cryptotrades
FileName :  item.module.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the module file which used to define item related component and module
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { ItemComponent } from './item.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
    imports: [
        CommonModule,
        MatIconModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot(),
    ],
    exports: [ItemComponent],
    declarations: [ItemComponent],
    providers: [],
})
export class ItemModule {
}