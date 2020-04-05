import { UserTypes } from '../enums/user-types.enum';
export interface UserLoggedDTO {
    user: {
        _id: string;
        email: string;
        name: string;
        type: UserTypes;
    };
    token: string;
}
