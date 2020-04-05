import { PreOrdersService } from '../services/pre-orders.service';
import { CreatePreOrdersDTO } from '../input-dto';
import { Response } from 'express';
export declare class PreOrdersController {
    private readonly preOrdersService;
    constructor(preOrdersService: PreOrdersService);
    create(createPreOrders: CreatePreOrdersDTO, res: Response): Promise<void>;
    findAll(res: Response): Promise<void>;
    findById(id: string, res: Response): Promise<void>;
    update(id: string, updatePreorderDTO: CreatePreOrdersDTO, res: Response): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
}
