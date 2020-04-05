import { Model } from 'mongoose';
import { PreOrders } from '../models';
import { CreatePreOrdersDTO } from '../input-dto';
export declare class PreOrdersService {
    private readonly preOrdersModel;
    constructor(preOrdersModel: Model<PreOrders>);
    create(createPreOrdersDTO: CreatePreOrdersDTO): Promise<PreOrders>;
    update(id: string, updatePreOrdersDTO: CreatePreOrdersDTO): Promise<PreOrders>;
    findAll(): Promise<PreOrders[]>;
    findById(id: string): Promise<PreOrders>;
    delete(id: string): Promise<PreOrders>;
}
