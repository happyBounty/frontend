/*
Project : Cryptotrades
FileName :  common.ts
Author : LinkWell
File Created : 21/07/2021
CopyRights : LinkWell
Purpose : This is the model class used to parse api common parameters and return response to components
*/
import { Category } from "./category";
import { Collection } from "./collection";
import { Deserializable } from "./deserializable";
import { History } from "./history";
import { Item } from "./item";
import { Offer } from "./offer";
import { Price } from "./price";
import { User } from "./user";

export class Common implements Deserializable {
    return_id:any;
	status:any;
	message:any;
	tempArray: Array<any> = [];
	result:any;
	data: any;
    
    deserialize(input: any): this {
       return Object.assign(this, input);
    }

	deserializeLoggedIn(input: any): this {
		if(input.status == true) {
			this.return_id = input.token
		}
		return Object.assign(this, input);
	}

	deserializeCollectionList(input: any): this {
		Object.assign(this, input);
		if(input.status == true) {
			var users = [];
			for (let index = 0; index < input.data.docs.length; index++) {
				const element = input.data.docs[index];
				users.push(new Collection().deserialize(element));
			}
			this.tempArray = users
		}
		return this;
	}

	deserializeCategoryList(input: any): this {
		Object.assign(this, input);
		if(input.status == true) {
			var category = [];
			for (let index = 0; index < input.data.length; index++) {
				const element = input.data[index];
				category.push(new Category().deserialize(element));
			}
			this.tempArray = category
		}
		return this;
	}

	deserializeCollectionView(input:any):this {
		Object.assign(this, input);
		this.result = new Collection().deserialize(this.result)
		return this
	}

	deserializeItemList(input: any): this {
		Object.assign(this, input);
		if(input.status == true) {
			var users = [];
			for (let index = 0; index < input.data.docs.length; index++) {
				const element = input.data.docs[index];
				users.push(new Item().deserialize(element));
			}
			this.tempArray = users
		}
		return this;
	}

	deserializeHistoryList(input: any): this {
		Object.assign(this, input);
		if(input.status == true) {
			var users = [];
			for (let index = 0; index < input.data.docs.length; index++) {
				const element = input.data.docs[index];
				users.push(new History().deserialize(element));
			}
			this.tempArray = users
		}
		return this;
	}

	deserializeOfferList(input: any): this {
		Object.assign(this, input);
		if(input.status == true) {
			var offers = [];
			for (let index = 0; index < input.data.docs.length; index++) {
				const element = input.data.docs[index];
				offers.push(new Offer().deserialize(element));
			}
			this.tempArray = offers
		}
		return this;
	}

	deserializePriceList(input: any): this {
		Object.assign(this, input);
		if(input.status == true) {
			var prices = [];
			for (let index = 0; index < input.data.docs.length; index++) {
				const element = input.data.docs[index];
				prices.push(new Price().deserialize(element));
			}
			this.tempArray = prices
		}
		return this;
	}

	deserializeFavouriteList(input: any): this {
		Object.assign(this, input);
		if(input.status == true) {
			var items = [];
			for (let index = 0; index < input.data.docs.length; index++) {
				const element = input.data.docs[index];
				items.push(new Item().deserialize(element.item_id));
			}
			this.tempArray = items
		}
		return this;
	}
	
}