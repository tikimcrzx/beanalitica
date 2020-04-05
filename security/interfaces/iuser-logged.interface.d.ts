import { UserTypes } from '../enums/user-types.enum';
import { RolesTypes } from '../enums/roles-types.enum';
export interface IUserLogged {
    _id: string;
    name: string;
    email: string;
    type: UserTypes;
    roles: RolesTypes[];
    branch?: any;
    company?: any;
}
