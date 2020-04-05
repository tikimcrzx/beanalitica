"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const custom_logger_service_1 = require("./services/custom-logger.service");
const mongoose_1 = require("@nestjs/mongoose");
const log_schema_1 = require("./schema/log.schema");
let LoggerModule = class LoggerModule {
};
LoggerModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: "Log", schema: log_schema_1.LogSchema, collection: "logs" }
            ])],
        providers: [custom_logger_service_1.CustomLoggerService],
        exports: [custom_logger_service_1.CustomLoggerService]
    })
], LoggerModule);
exports.LoggerModule = LoggerModule;
//# sourceMappingURL=logger.module.js.map