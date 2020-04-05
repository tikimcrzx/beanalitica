import { Comment, DishPreOrders } from '../../models';
export interface CreatePreOrdersDTO {
    readonly dishes: DishPreOrders[];
    readonly dateAndHour: Date;
    readonly total: number;
    readonly subtotal: number;
    readonly VAT: number;
    readonly clientAddress: string;
    readonly clientPhoneNumber: string;
    readonly comment: Comment[];
    readonly status: string;
}
