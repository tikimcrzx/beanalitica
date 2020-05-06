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
const schemas_1 = require("./schemas");
const security_module_1 = require("../security/security.module");
const dished_pre_orders_controller_1 = require("./controllers/dished-pre-orders.controller");
const pre_orders_controller_1 = require("./controllers/pre-orders.controller");
const pre_orders_service_1 = require("./services/pre-orders.service");
const dish_pre_orders_service_1 = require("./services/dish-pre-orders.service");
let PreordersModule = class PreordersModule {
};
PreordersModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: 'DishedPreOrders',
                    schema: schemas_1.DishPreOrdersSchema,
                    collection: 'dishpreorders',
                },
                {
                    name: 'PreOrders',
                    schema: schemas_1.PreOrdersSchema,
                    collection: 'preorders',
                },
            ]),
            common_1.forwardRef(() => security_module_1.SecurityModule),
        ],
        controllers: [pre_orders_controller_1.PreOrdersController, dished_pre_orders_controller_1.DishedPreOrdersController],
        providers: [pre_orders_service_1.PreOrdersService, dish_pre_orders_service_1.DishPreOrdersService],
        exports: [mongoose_1.MongooseModule],
    })
], PreordersModule);
exports.PreordersModule = PreordersModule;
//# sourceMappingURL=preorders.module.js.map