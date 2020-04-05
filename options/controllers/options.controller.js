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
const roles_types_enum_1 = require("../../security/enums/roles-types.enum");
const roles_decorator_1 = require("../../security/decorators/roles.decorator");
const options_service_1 = require("../services/options.service");
let OptionsController = class OptionsController {
    constructor(optionsService) {
        this.optionsService = optionsService;
    }
    async find(req, res) {
        const filters = req.companyFilters;
        const dealer = await this.optionsService.find(filters);
        res.status(common_1.HttpStatus.OK).json(dealer);
    }
    async update(updateOptionsDto, req, res) {
        const filters = req.companyFilters;
        const entityUpdated = await this.optionsService.update(filters, updateOptionsDto);
        res.status(common_1.HttpStatus.OK).json(entityUpdated);
    }
};
__decorate([
    common_1.Get(),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN, roles_types_enum_1.RolesTypes.ATTENDANT),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], OptionsController.prototype, "find", null);
__decorate([
    common_1.Put(),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN),
    __param(0, common_1.Body()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], OptionsController.prototype, "update", null);
OptionsController = __decorate([
    common_1.Controller('options'),
    __metadata("design:paramtypes", [options_service_1.OptionsService])
], OptionsController);
exports.OptionsController = OptionsController;
//# sourceMappingURL=options.controller.js.map