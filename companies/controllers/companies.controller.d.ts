import { Request, Response } from 'express';
import { CompaniesService } from '../services/companies.service';
import { CreateCompanyDTO, UpdateCompanyDTO } from '../input-dto';
export declare class CompaniesController {
    private readonly companyService;
    constructor(companyService: CompaniesService);
    findAll(req: Request, res: Response): Promise<void>;
    find(id: string, res: Response): Promise<void>;
    findByName(name: string, res: Response): Promise<void>;
    create(createCompanyDTO: CreateCompanyDTO, res: Response): Promise<void>;
    update(id: string, updateComanyDto: UpdateCompanyDTO, res: Response): Promise<void>;
    delete(id: string, res: Response): Promise<void>;
    findName(name: string, res: Response): Promise<void>;
}
