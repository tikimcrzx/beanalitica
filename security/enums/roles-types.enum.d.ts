import { RoleDTO } from '../output-dto';
export declare enum RolesTypes {
    ADMIN = "admin",
    ATTENDANT = "attendant"
}
export declare function getRolesForUsers(): RolesTypes[];
export declare function getRolesForUsersDTO(): RoleDTO[];
