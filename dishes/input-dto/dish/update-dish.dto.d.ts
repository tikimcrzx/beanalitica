import { Ingredient } from '../../models';
export interface UpdateDishDTO {
    readonly name: string;
    readonly ingredients: Ingredient[];
    readonly details: [{
        size: string;
    }, {
        price: number;
    }];
    readonly image: string;
}
