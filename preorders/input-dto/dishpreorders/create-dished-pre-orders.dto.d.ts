import { Dish } from '../../../dishes/models';
import { Comment } from '../../models';
export interface CreateDishedPreOrdersDTO {
    readonly quantity: number;
    readonly dishes: [{
        name: Dish;
    }];
    readonly comments: Comment[];
    readonly total: number;
}
