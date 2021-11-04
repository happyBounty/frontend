
/*
Project : Cryptotrades
FileName :  collectionitem.component.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the component file which used to define collection item as sub compoonent
*/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { config } from 'src/app/constants/config';

@Component({
  selector: 'app-collectionitem',
  templateUrl: './collectionitem.component.html',
  styleUrls: ['./collectionitem.component.css']
})
export class CollectionitemComponent implements OnInit {
  mediaBase: string = config.media_path
  @Input() collection: any;
  @Output() collectionEvent = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * This is the function which used send notification to parent component for collection choose
   */
  collectionAction = () => {
    this.collectionEvent.emit({
      type:"view",
      item:this.collection
    });
  }

}
