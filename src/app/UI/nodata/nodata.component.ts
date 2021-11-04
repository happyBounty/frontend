/*
Project : Cryptotrades
FileName :  nodata.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to show empty message on screens
*/
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nodata',
  templateUrl: './nodata.component.html',
  styleUrls: ['./nodata.component.css']
})
export class NodataComponent implements OnInit {
  @Input() msg: any;
  constructor() { }

  ngOnInit(): void {
  }

}
