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
const roles_types_enum_1 = require("../enums/roles-types.enum");
const roles_decorator_1 = require("../decorators/roles.decorator");
let SecurityEnumsController = class SecurityEnumsController {
    async findAllRoles(req, res) {
        const deliveryTypes = roles_types_enum_1.getRolesForUsersDTO();
        res.status(common_1.HttpStatus.OK).json(deliveryTypes);
    }
};
__decorate([
    common_1.Get("roles"),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SecurityEnumsController.prototype, "findAllRoles", null);
SecurityEnumsController = __decorate([
    common_1.Controller('securityenums')
], SecurityEnumsController);
exports.SecurityEnumsController = SecurityEnumsController;
//# sourceMappingURL=security-enums.controller.js.map