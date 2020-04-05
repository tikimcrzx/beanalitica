import { Model } from 'mongoose';
import { CreateDishDTO } from '../input-dto';
import { Dish } from '../models';
export declare class DishService {
    private readonly dishModel;
    constructor(dishModel: Model<Dish>);
    create(createDishDTO: CreateDishDTO): Promise<Dish>;
    update(id: string, updateDishDTO: CreateDishDTO): Promise<Dish>;
    findAll(): Promise<Dish[]>;
    findById(id: string): Promise<Dish>;
    findOne(name: string): Promise<Dish>;
    messageBot(message: string, title: string, subtitle: string, imageUrl: string): {
        card: {
            title: string;
            subtitle: string;
            imageUrl: string;
            buttons: {
                text: string;
                postback: string;
            }[];
        };
    };
}
