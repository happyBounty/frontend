/*
Project : Cryptotrades
FileName :  offer.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse offer api response
*/
import {Deserializable} from "./deserializable";
export class Offer implements Deserializable{
    _id:any;
    item_id:any;
    sender:any;
    receiver:any;
    price:any;
    created_date:any;
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
}