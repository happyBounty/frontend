/*
Project : Cryptotrades
FileName :  item.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse item api response
*/
import {Deserializable} from "./deserializable";
export class Item implements Deserializable{
    _id:any;
    name:any;
    description:any;
    media:any;
    thumb:any;
    external_link:any;
    has_offer:any;
    unlock_content_url:any;
    view_count:any;
    like_count:any;
    price:any;
    token_id:any;
    status:any;
    attributes:any;
    levels:any;
    stats:any;
    category_id:any;
    collection_id:any;
    author_id:any;
    current_owner:any
    create_date:any;
    minted_date:any;

    
    deserialize(input: any) {
      Object.assign(this, input);
      this.like_count = this.shortNum(this.like_count)
      this.view_count = this.shortNum(this.view_count)
      return this;
    }

    shortNum(value:any): any {
      if (value === null) return null;
      if (value === 0) return "0";
      var fractionSize = 1;
      var abs = Math.abs(value);
      var rounder = Math.pow(10, fractionSize);
      var isNegative = value < 0;
      var key = '';
      var powers = [{ key: "Q", value: Math.pow(10, 15) }, { key: "T", value: Math.pow(10, 12) }, { key: "B", value: Math.pow(10, 9) }, { key: "M", value: Math.pow(10, 6) }, { key: "k", value: 1000 }];
      for (var i = 0; i < powers.length; i++) {
        var reduced = abs / powers[i].value;
        reduced = Math.round(reduced * rounder) / rounder;
        if (reduced >= 1) {
          abs = reduced;
          key = powers[i].key;
          break;
        }
      }
      return (isNegative ? '-' : '') + abs + key;
    }
}