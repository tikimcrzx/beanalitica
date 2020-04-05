import { Document } from 'mongoose';
import { Company, Branch } from '.';
import { RolesTypes } from '../../security/enums/roles-types.enum';
import { IUserLogged } from '../../security/interfaces/iuser-logged.interface';
export interface User extends Document, IUserLogged {
    _id: string;
    name: string;
    email: string;
    password: string;
    roles: [RolesTypes];
    status: boolean;
    branch: Branch | any;
    company: Company | any;
}
