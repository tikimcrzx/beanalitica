import { ArgumentsHost } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Request } from "express";
import { CustomLoggerService } from "../services/custom-logger.service";
import { LogTypes } from "../enums/log-types.enum";
export declare class GenericExceptionFilter extends BaseExceptionFilter {
    private readonly loggerService;
    constructor(loggerService: CustomLoggerService);
    catch(exception: any, host: ArgumentsHost): void;
    logError(message: string, type: LogTypes, status: number, request: Request): void;
}
