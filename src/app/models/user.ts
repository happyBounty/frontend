/*
Project : Cryptotrades
FileName :  price.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse user api response
*/
import {Deserializable} from "./deserializable";
export class User implements Deserializable{
    _id:any;
    username:any;
    is_follow:any;
    is_private:any
    email:any;
    first_name:any;
    last_name:any;
    profile_image:any;
    status:any;
    dob:any;
    phone:any;
    
    deserialize(input: any) {
      Object.assign(this, input);
      if(this.profile_image.length==0) {
        this.profile_image = "nouser.jpg"
      }
      return this;
    }
}