import { Request, Response } from 'express';
import { BranchesService } from '../services/branches.service';
import { CreateBranchDTO, UpdateBranchDTO } from '../input-dto';
import { IntentParameterstDTO } from '../../main/input-dto';
export declare class BranchesController {
    private readonly branchesService;
    constructor(branchesService: BranchesService);
    create(createBranchDTO: CreateBranchDTO, res: Response): Promise<void>;
    location(parameters: IntentParameterstDTO, res: Response): Promise<void>;
    menu(parameters: IntentParameterstDTO, res: Response): Promise<void>;
    schedule(parameters: IntentParameterstDTO, res: Response): Promise<void>;
    findOne(name: string, res: Response): Promise<void>;
    findAll(req: Request, res: Response): Promise<void>;
    findById(id: string, res: Response): Promise<void>;
    update(id: string, res: Response, updateBranch: UpdateBranchDTO): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
}
