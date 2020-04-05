import { Document } from 'mongoose';
export interface Comment extends Document {
    _id: string;
    comment: string;
}
