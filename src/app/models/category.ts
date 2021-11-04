/*
Project : Cryptotrades
FileName :  category.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse category api response
*/
import {Deserializable} from "./deserializable";
export class Category implements Deserializable{
    _id:any;
    title:any;
    category_image:any;
    
    deserialize(input: any) {
      Object.assign(this, input);
      return this;
    }
}