import { Request } from 'express';
import { Company, Branch } from '../../companies/models';
import { CompanyFilters } from '../input-dto/company-filters.dto';
import { IUserLogged } from '../interfaces/iuser-logged.interface';
export interface RequestDecorator extends Request {
    user?: IUserLogged;
    company?: Company;
    branch?: Branch;
    companyFilters?: CompanyFilters;
}
