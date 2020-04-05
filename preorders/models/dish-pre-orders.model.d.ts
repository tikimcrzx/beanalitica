import { Document } from 'mongoose';
import { Comment } from './comment.model';
export interface DishPreOrders extends Document {
    _id: string;
    quantity: number;
    comments: Comment[];
    total: number;
}
