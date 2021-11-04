/*
Project : Cryptotrades
FileName :  item.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to define item as sub compoonent
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { config } from 'src/app/constants/config';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  mediaBase: string = config.media_path
  @Input() item: any;
  @Output() itemEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * This is the function which used send notification to parent component for item view
   */
  viewAction = () => {
    this.itemEvent.emit({
      type:"view",
      item:this.item
    });
  }


  /**
   * This is the function which used send notification to parent component for item edit
   */
  editAction = () => {
    this.itemEvent.emit({
      type:"edit",
      item:this.item
    });
  }

  /**
   * This is the function which used send notification to parent component for item delete
   */
  deleteAction = () => {
    this.itemEvent.emit({
      type:"delete",
      item:this.item
    });
  }

  /**
   * This is the function which used send notification to parent component for item publish
   */
  publishAction = () => {
    this.itemEvent.emit({
      type:"publish",
      item:this.item
    });
  }

}
