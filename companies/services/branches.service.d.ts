import { Model } from 'mongoose';
import { Branch } from '../models';
import { CreateBranchDTO, UpdateBranchDTO } from '../input-dto';
export declare class BranchesService {
    private readonly branchModel;
    constructor(branchModel: Model<Branch>);
    create(createBranchDTO: CreateBranchDTO): Promise<Branch>;
    update(id: string, updateBranchDTO: UpdateBranchDTO): Promise<Branch>;
    findAll(): Promise<Branch[]>;
    findById(id: string): Promise<Branch>;
    delete(id: string): Promise<Branch>;
    findOne(name: string): Promise<Branch>;
    menu(name: string): Promise<any[]>;
    messageBot(message: string, source: string): {
        fulfillmentText: string;
        source: string;
    };
    messageBots(message: string, title: string, subtitle: string, imageUrl: string): {
        card: {
            title: string;
            subtitle: string;
            imageUrl: string;
            buttons: {
                text: string;
                postback: string;
            }[];
        };
        plataform: string;
    };
    responseBot(name: string, intent: string): Promise<any>;
}
