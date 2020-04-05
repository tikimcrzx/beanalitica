import { Comment } from '../../models';
export interface UpdateDishedPreOrdersDTO {
    readonly quantity: number;
    readonly comments: Comment[];
    readonly total: number;
}
