import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { UsersSecurityService } from '../services/users-security.service';
import { TokensManager } from '../utils/tokens.manager';
import { RequestDecorator } from '../decorators/request.decorator';
import { IUserLogged } from '../interfaces/iuser-logged.interface';
export declare class TokensValidationMiddleware implements NestMiddleware {
    private readonly usersSecurityService;
    private readonly tokensManager;
    constructor(usersSecurityService: UsersSecurityService, tokensManager: TokensManager);
    use(req: Request, res: Response, next: () => void): Promise<void>;
    addUserMetadataToRequest(req: RequestDecorator, user: IUserLogged): void;
}
