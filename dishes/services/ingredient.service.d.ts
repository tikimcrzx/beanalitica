import { Ingredient } from '../models';
import { CreateIngredientDTO } from '../input-dto';
import { Model } from 'mongoose';
export declare class IngredientService {
    private readonly ingredientModel;
    constructor(ingredientModel: Model<Ingredient>);
    create(createIngredientDTO: CreateIngredientDTO): Promise<Ingredient>;
    update(id: string, updateIngredientDTO: CreateIngredientDTO): Promise<Ingredient>;
    findAll(): Promise<Ingredient[]>;
    findById(id: string): Promise<Ingredient>;
    findOne(name: string): Promise<Ingredient>;
    delete(id: string): Promise<Ingredient>;
    checkIngredientDuplication(name: string): Promise<Boolean>;
}
