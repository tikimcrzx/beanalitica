import { IngredientService } from '../services/ingredient.service';
import { Response } from 'express';
import { CreateIngredientDTO, UpdateIngredientDTO } from '../input-dto';
export declare class IngredientsController {
    private readonly ingredientService;
    constructor(ingredientService: IngredientService);
    create(createIngredient: CreateIngredientDTO, res: Response): Promise<void>;
    update(id: string, updateIngredient: UpdateIngredientDTO, res: Response): Promise<void>;
    findAll(res: Response): Promise<void>;
    findOne(id: string, res: Response): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
}
