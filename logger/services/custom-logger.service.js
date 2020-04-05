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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CustomLoggerService = class CustomLoggerService {
    constructor(logger, logModel) {
        this.logger = logger;
        this.logModel = logModel;
    }
    async logError(logData) {
        try {
            this.logger.error(`Path: ${logData.path} - Method: ${logData.method} - Body: ${logData.body} - Message: ${logData.message}`);
            const log = new this.logModel(logData);
            const logSaved = await log.save();
            return logSaved;
        }
        catch (err) {
            this.logger.error(err.message);
        }
    }
};
CustomLoggerService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject("winston")),
    __param(1, mongoose_1.InjectModel("Log")),
    __metadata("design:paramtypes", [Object, mongoose_2.Model])
], CustomLoggerService);
exports.CustomLoggerService = CustomLoggerService;
//# sourceMappingURL=custom-logger.service.js.map