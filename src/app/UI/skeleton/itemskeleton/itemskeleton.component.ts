/*
Project : Cryptotrades
FileName :  itemskeleton.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show item skeleton
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-itemskeleton',
  templateUrl: './itemskeleton.component.html',
  styleUrls: ['./itemskeleton.component.css']
})
export class ItemskeletonComponent implements OnInit {

  collections:any = [1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
  }

}
