import { Document } from 'mongoose';
import { Ingredient } from './ingredient.model';
export interface Dish extends Document {
    _id: string;
    name: string;
    ingredients: Ingredient[];
    details: [{
        size: string;
    }, {
        price: number;
    }];
    image: string;
}
