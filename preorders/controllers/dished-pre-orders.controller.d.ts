import { DishPreOrdersService } from '../services/dish-pre-orders.service';
import { CreateDishedPreOrdersDTO } from '../input-dto';
import { Response } from 'express';
export declare class DishedPreOrdersController {
    private readonly dishedPreOrdersService;
    constructor(dishedPreOrdersService: DishPreOrdersService);
    create(createDishedPreOrders: CreateDishedPreOrdersDTO, res: Response): Promise<void>;
    findAll(res: Response): Promise<void>;
    findByid(id: string, res: Response): Promise<void>;
    update(id: string, updateDishedPreOrders: CreateDishedPreOrdersDTO, res: Response): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
}
