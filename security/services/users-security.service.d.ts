import { Model } from "mongoose";
import { User } from "../../companies/models";
import { LoginDTO } from "../input-dto";
import { SecurityService } from "./security-service.interface";
import { IUserLogged } from "../interfaces/iuser-logged.interface";
export declare class UsersSecurityService implements SecurityService<User> {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findToLogin(loginDto: LoginDTO): Promise<IUserLogged>;
    findWithRoles(userId: string): Promise<User>;
}
