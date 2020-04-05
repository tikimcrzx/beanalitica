import { HttpException } from '@nestjs/common';
export declare class BusinessRuleException extends HttpException {
    constructor(message: string);
}
