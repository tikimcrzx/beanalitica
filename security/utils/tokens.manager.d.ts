import { IUserLogged } from "../interfaces/iuser-logged.interface";
export declare class TokensManager {
    generateToken(userDTO: IUserLogged): string;
    verifyToken(token: string): Promise<string | object>;
}
