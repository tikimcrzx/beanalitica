import { LoginDTO } from "../input-dto";
import { IUserLogged } from "../interfaces/iuser-logged.interface";
export interface SecurityService<T> {
    findToLogin(loginDto: LoginDTO): Promise<IUserLogged>;
    findWithRoles(userId: string): Promise<T>;
}
