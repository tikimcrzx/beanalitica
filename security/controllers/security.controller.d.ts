import { UsersSecurityService } from "../services/users-security.service";
import { LoginDTO } from "../input-dto";
import { Response } from "express";
import { TokensManager } from '../utils/tokens.manager';
export declare class SecurityController {
    private readonly usersSecurityService;
    private readonly tokensManager;
    constructor(usersSecurityService: UsersSecurityService, tokensManager: TokensManager);
    login(loginDto: LoginDTO, res: Response): Promise<void>;
}
