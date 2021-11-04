/*
Project : Cryptotrades
FileName :  deserializable.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to fix type casting issue on parse api response
*/
export interface Deserializable {
    deserialize(input: any): this;
  }