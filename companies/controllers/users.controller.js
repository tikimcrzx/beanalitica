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
const users_service_1 = require("../services/users.service");
const roles_decorator_1 = require("../../security/decorators/roles.decorator");
const roles_types_enum_1 = require("../../security/enums/roles-types.enum");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll(req, res) {
        const filters = req.companyFilters;
        const entities = await this.usersService.findAll(filters);
        res.status(common_1.HttpStatus.OK).json(entities);
    }
    async findById(id, req, res) {
        const filters = req.companyFilters;
        const user = await this.usersService.findById(filters, id);
        res.status(common_1.HttpStatus.OK).json(user);
    }
    async create(createUserDto, req, res) {
        const filters = req.companyFilters;
        const entitySaved = await this.usersService.create(filters, createUserDto);
        res.status(common_1.HttpStatus.CREATED).json(entitySaved);
    }
    async update(updateUserDto, req, res) {
        const filters = req.companyFilters;
        const entityUpdated = await this.usersService.update(filters, updateUserDto);
        res.status(common_1.HttpStatus.OK).json(entityUpdated);
    }
    async delete(id, req, res) {
        const filters = req.companyFilters;
        const userDeleted = await this.usersService.delete(filters, id);
        res.status(common_1.HttpStatus.OK).json(userDeleted);
    }
    async checkEmailDuplication(email, req, res) {
        const filters = req.companyFilters;
        const isDuplicated = await this.usersService.checkEmailDuplication(filters, email);
        res.status(common_1.HttpStatus.OK).json({ isDuplicated: isDuplicated });
    }
};
__decorate([
    common_1.Get(),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN, roles_types_enum_1.RolesTypes.ATTENDANT),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findById", null);
__decorate([
    common_1.Post(),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    common_1.Put(),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN),
    __param(0, common_1.Body()),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "delete", null);
__decorate([
    common_1.Get('duplication/:email'),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN),
    __param(0, common_1.Param('email')),
    __param(1, common_1.Req()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checkEmailDuplication", null);
UsersController = __decorate([
    common_1.Controller('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map