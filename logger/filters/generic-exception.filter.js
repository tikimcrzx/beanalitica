"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const custom_logger_service_1 = require("../services/custom-logger.service");
const log_types_enum_1 = require("../enums/log-types.enum");
const constants_1 = require("../utils/constants");
const mongodb_1 = require("mongodb");
let GenericExceptionFilter = class GenericExceptionFilter extends core_1.BaseExceptionFilter {
    constructor(loggerService) {
        super();
        this.loggerService = loggerService;
    }
    catch(exception, host) {
        const context = host.switchToHttp();
        const response = context.getResponse();
        const request = context.getRequest();
        let status;
        let type;
        let errorMessage;
        if (exception instanceof common_1.HttpException) {
            status = exception.getStatus();
            type = log_types_enum_1.LogTypes.BUSINESS_ERROR;
            errorMessage = exception.message;
        }
        else if (exception.name === constants_1.MONGO_VALIDATION_ERROR) {
            status = common_1.HttpStatus.BAD_REQUEST;
            type = log_types_enum_1.LogTypes.BUSINESS_ERROR;
            errorMessage = { statusCode: status, error: "validation_error", message: exception.message };
        }
        else if (exception instanceof mongodb_1.MongoError) {
            status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            type = log_types_enum_1.LogTypes.DATABASE_ERROR;
            errorMessage = { statusCode: status, error: "error", message: exception.message };
        }
        else {
            status = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            type = log_types_enum_1.LogTypes.ERROR;
            errorMessage = { statusCode: status, error: "error", message: exception.message };
        }
        response.status(status).json(errorMessage);
        this.logError(exception.message, type, status, request);
    }
    logError(message, type, status, request) {
        const log = {
            type: type,
            statusCode: status,
            message: message,
            path: request.url,
            method: request.method,
            body: JSON.stringify(request.body),
            user: request["user"],
            company: request["company"],
            branch: request["branch"]
        };
        this.loggerService.logError(log);
    }
};
GenericExceptionFilter = __decorate([
    common_1.Catch(),
    __metadata("design:paramtypes", [custom_logger_service_1.CustomLoggerService])
], GenericExceptionFilter);
exports.GenericExceptionFilter = GenericExceptionFilter;
//# sourceMappingURL=generic-exception.filter.js.map