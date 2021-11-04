/*
Project : Cryptotrades
FileName :  history.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse history api response
*/
import {Deserializable} from "./deserializable";
export class History implements Deserializable{
    _id:any;
    item_id:any;
    collection_id:any;
    from_id:any;
    to_id:any;
    transaction_hash:any;
    history_type:any;
    price:any;

    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
}