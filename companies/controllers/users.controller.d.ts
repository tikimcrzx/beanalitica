import { Response } from 'express';
import { UsersService } from '../services/users.service';
import { CreateUserDTO, UpdateUserDTO } from '../input-dto';
import { RequestDecorator } from '../../security/decorators/request.decorator';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(req: RequestDecorator, res: Response): Promise<void>;
    findById(id: string, req: RequestDecorator, res: Response): Promise<void>;
    create(createUserDto: CreateUserDTO, req: RequestDecorator, res: Response): Promise<void>;
    update(updateUserDto: UpdateUserDTO, req: RequestDecorator, res: Response): Promise<void>;
    delete(id: string, req: RequestDecorator, res: Response): Promise<void>;
    checkEmailDuplication(email: string, req: RequestDecorator, res: Response): Promise<void>;
}
