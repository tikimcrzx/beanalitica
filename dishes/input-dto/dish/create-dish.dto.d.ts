import { Ingredient } from '../../models';
export interface CreateDishDTO {
    readonly name: string;
    readonly ingredients: Ingredient[];
    readonly details: [{
        size: string;
    }, {
        price: number;
    }];
    readonly image: string;
}
