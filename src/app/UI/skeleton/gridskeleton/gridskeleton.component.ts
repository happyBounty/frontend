/*
Project : Cryptotrades
FileName :  gridskeleton.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show grid skeleton
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gridskeleton',
  templateUrl: './gridskeleton.component.html',
  styleUrls: ['./gridskeleton.component.css']
})
export class GridskeletonComponent implements OnInit {

  collections:any = [1,2,3,4]
  constructor() { }

  ngOnInit(): void {
  }

}
