import { LogTypes } from "../enums/log-types.enum";
export interface CreateLogDto {
    type: LogTypes;
    statusCode: number;
    message: string | any;
    path: string;
    method: string;
    body: string;
    user: string | any;
    branch: string | any;
    company: string | any;
}
