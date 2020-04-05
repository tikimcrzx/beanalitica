import { DishService } from '../services/dish.service';
import { CreateDishDTO, UpdateDishDTO } from '../input-dto';
import { Response } from 'express';
export declare class DishesController {
    private readonly dishesServices;
    constructor(dishesServices: DishService);
    create(createDish: CreateDishDTO, res: Response): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(id: string, res: Response): Promise<void>;
    update(id: string, updateDishDTO: UpdateDishDTO, res: Response): Promise<void>;
}
