import { Document } from 'mongoose';
import { DishPreOrders } from './dish-pre-orders.model';
import { Comment } from './comment.model';
export interface PreOrders extends Document {
    _id: string;
    dishes: DishPreOrders[];
    dateAndHour: Date;
    total: number;
    subtotal: number;
    VAT: number;
    clientAddress: string;
    clientPhoneNumber: string;
    comment: Comment[];
    status: string;
}
