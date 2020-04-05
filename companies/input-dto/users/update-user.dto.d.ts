import { RolesTypes } from '../../../security/enums/roles-types.enum';
export interface UpdateUserDTO {
    readonly _id: string;
    readonly name: string;
    readonly status: boolean;
    readonly email: string;
    readonly password: string;
    readonly roles: [RolesTypes];
}
