/*
Project : Cryptotrades
FileName :  price.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse price api response
*/
import {Deserializable} from "./deserializable";
export class Price implements Deserializable{
    _id:any;
    item_id:any;
    price:any;
    user_id:any;
    created_date:any;

    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
}