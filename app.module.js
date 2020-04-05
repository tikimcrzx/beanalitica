"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const companies_module_1 = require("./companies/companies.module");
const security_module_1 = require("./security/security.module");
const tokens_validation_middleware_1 = require("./security/middlewares/tokens-validation.middleware");
const roles_guard_1 = require("./security/guards/roles.guard");
const core_1 = require("@nestjs/core");
const mongoConfig = require("./configs/mongo.config");
const winstonConfig = require("./configs/winston.config");
const nest_winston_1 = require("nest-winston");
const users_controller_1 = require("./companies/controllers/users.controller");
const branches_controller_1 = require("./companies/controllers/branches.controller");
const images_module_1 = require("./images/images.module");
const images_controller_1 = require("./images/controllers/images.controller");
const logger_module_1 = require("./logger/logger.module");
const generic_exception_filter_1 = require("./logger/filters/generic-exception.filter");
const security_enums_controller_1 = require("./security/controllers/security-enums.controller");
const options_module_1 = require("./options/options.module");
const options_controller_1 = require("./options/controllers/options.controller");
const main_module_1 = require("./main/main.module");
const dishes_module_1 = require("./dishes/dishes.module");
const companies_controller_1 = require("./companies/controllers/companies.controller");
const home_controller_1 = require("./main/controllers/home.controller");
const preorders_module_1 = require("./preorders/preorders.module");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(tokens_validation_middleware_1.TokensValidationMiddleware)
            .exclude({ path: 'security/login', method: common_1.RequestMethod.POST })
            .forRoutes(users_controller_1.UsersController, companies_controller_1.CompaniesController, branches_controller_1.BranchesController, security_enums_controller_1.SecurityEnumsController, images_controller_1.ImagesController, options_controller_1.OptionsController, home_controller_1.HomeController);
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(mongoConfig.URI, mongoConfig.connectionOptions),
            nest_winston_1.WinstonModule.forRoot({ transports: winstonConfig.transports }),
            companies_module_1.CompaniesModule,
            security_module_1.SecurityModule,
            images_module_1.ImagesModule,
            logger_module_1.LoggerModule,
            options_module_1.OptionsModule,
            main_module_1.MainModule,
            dishes_module_1.DishesModule,
            preorders_module_1.PreordersModule,
        ],
        controllers: [],
        providers: [
            { provide: core_1.APP_GUARD, useClass: roles_guard_1.RolesGuard },
            { provide: core_1.APP_FILTER, useClass: generic_exception_filter_1.GenericExceptionFilter },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map