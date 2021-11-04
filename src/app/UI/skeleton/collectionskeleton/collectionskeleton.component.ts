/*
Project : Cryptotrades
FileName :  collectionskeleton.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show collection skeleton
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collectionskeleton',
  templateUrl: './collectionskeleton.component.html',
  styleUrls: ['./collectionskeleton.component.css']
})
export class CollectionskeletonComponent implements OnInit {
  collections:any = [1,2,3,4,5,6,7,8,9]
  constructor() { }

  ngOnInit(): void {
  }

}
