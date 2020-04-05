import { RolesTypes } from '../../../security/enums/roles-types.enum';
export interface CreateUserDTO {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly roles: [RolesTypes];
}
