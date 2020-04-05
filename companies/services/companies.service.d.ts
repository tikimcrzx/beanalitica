import { CreateCompanyDTO, UpdateCompanyDTO } from '../input-dto';
import { Model } from 'mongoose';
import { Company } from '../models';
export declare class CompaniesService {
    private readonly companyModel;
    constructor(companyModel: Model<Company>);
    create(createCompanyDTO: CreateCompanyDTO): Promise<Company>;
    update(id: string, updateCompanyDTO: UpdateCompanyDTO): Promise<Company>;
    delete(id: string): Promise<Company>;
    findAll(): Promise<Company[]>;
    findById(id: string): Promise<Company>;
    findByCompanyName(name: string): Promise<Company>;
}
