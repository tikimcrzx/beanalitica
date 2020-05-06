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
    responseFacebookCards(title: any, subtitle: any, imageUri: any, button: any): {
        card: {
            title: any;
            subtitle: any;
            imageUri: any;
            buttons: {
                text: any;
                postback: string;
            }[];
        };
        platfrom: string;
        sendAsMessage: boolean;
    };
    menu(name: string): Promise<{
        fulfillmentMessages: any[];
    }>;
    messageBot(message: string, source: string): {
        fulfillmentText: string;
        source: string;
    };
    messageBots(message: string, title: string, subtitle: string, imageUri: string): {
        card: {
            title: string;
            subtitle: string;
            imageUri: string;
            buttons: {
                text: string;
                postback: string;
            }[];
        };
        plataform: string;
    };
    responseBot(name: string, intent: string): Promise<any>;
}
