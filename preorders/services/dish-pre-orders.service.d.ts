import { DishPreOrders } from '../models/dish-pre-orders.model';
import { CreateDishedPreOrdersDTO } from '../input-dto';
import { Model } from 'mongoose';
export declare class DishPreOrdersService {
    private readonly dishPreOrdersModel;
    constructor(dishPreOrdersModel: Model<DishPreOrders>);
    create(createDishPreOrders: CreateDishedPreOrdersDTO): Promise<DishPreOrders>;
    update(id: string, updateDishedPreOrders: CreateDishedPreOrdersDTO): Promise<DishPreOrders>;
    findAll(): Promise<DishPreOrders[]>;
    findOne(dish: string): Promise<DishPreOrders>;
    findById(id: string): Promise<DishPreOrders>;
    delete(id: string): Promise<DishPreOrders>;
}
