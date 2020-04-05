"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const users_security_service_1 = require("./services/users-security.service");
const companies_module_1 = require("../companies/companies.module");
const security_controller_1 = require("./controllers/security.controller");
const tokens_manager_1 = require("./utils/tokens.manager");
const roles_guard_1 = require("./guards/roles.guard");
const tokens_validation_middleware_1 = require("./middlewares/tokens-validation.middleware");
const logger_module_1 = require("../logger/logger.module");
const security_enums_controller_1 = require("./controllers/security-enums.controller");
let SecurityModule = class SecurityModule {
};
SecurityModule = __decorate([
    common_1.Module({
        imports: [common_1.forwardRef(() => companies_module_1.CompaniesModule),
            logger_module_1.LoggerModule],
        providers: [
            users_security_service_1.UsersSecurityService,
            tokens_manager_1.TokensManager,
            tokens_validation_middleware_1.TokensValidationMiddleware,
            roles_guard_1.RolesGuard
        ],
        controllers: [security_controller_1.SecurityController, security_enums_controller_1.SecurityEnumsController],
        exports: [tokens_manager_1.TokensManager, tokens_validation_middleware_1.TokensValidationMiddleware,
            users_security_service_1.UsersSecurityService]
    })
], SecurityModule);
exports.SecurityModule = SecurityModule;
//# sourceMappingURL=security.module.js.map