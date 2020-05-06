import { Document } from 'mongoose';
export interface DishPreOrders extends Document {
    _id: string;
    dishes: string;
    quantity: number;
}
