import { RolesTypes } from '../enums/roles-types.enum';
export declare const Roles: (...roles: RolesTypes[]) => (target: object, key?: any, descriptor?: any) => any;
