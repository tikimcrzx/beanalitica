import { Document } from "mongoose";
import { LogTypes } from "../enums/log-types.enum";
export interface Log extends Document {
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
