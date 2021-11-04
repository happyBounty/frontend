/*
Project : Cryptotrades
FileName :  collection.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse collection api response
*/
import {Deserializable} from "./deserializable";
export class Collection implements Deserializable{
    _id:any;
    name:any;
    description:any;
    royalties:any = 0;
    item_count:any = 0;
    volume_traded:any = 0;
    item_count_str:any;
    volume_traded_str:any;
    image:any;
    banner:any;
    contract_address:any;
    created_date:any
    
    deserialize(input: any) {
      Object.assign(this, input);
      this.volume_traded_str = this.shortNum(this.volume_traded);
      this.item_count_str = this.shortNum(this.item_count)
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