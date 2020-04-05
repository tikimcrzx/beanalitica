import { Model } from 'mongoose';
import { User } from '../models';
import { CreateUserDTO, UpdateUserDTO } from '../input-dto';
import { CompanyFilters } from '../../security/input-dto/company-filters.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(filters: CompanyFilters, createUserDto: CreateUserDTO): Promise<User>;
    update(filters: CompanyFilters, userUpdated: UpdateUserDTO): Promise<User>;
    delete(filters: CompanyFilters, id: string): Promise<User>;
    findAll(filters: CompanyFilters): Promise<User[]>;
    findById(filters: CompanyFilters, id: string): Promise<User>;
    findByName(filters: CompanyFilters, name: string): Promise<User>;
    checkEmailDuplication(filters: CompanyFilters, email: string): Promise<boolean>;
}
