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
const companies_service_1 = require("../services/companies.service");
let CompaniesController = class CompaniesController {
    constructor(companyService) {
        this.companyService = companyService;
    }
    async findAll(req, res) {
        const companies = await this.companyService.findAll();
        res.status(common_1.HttpStatus.OK).json(companies);
    }
    async find(id, res) {
        const company = await this.companyService.findById(id);
        res.status(common_1.HttpStatus.OK).json(company);
    }
    async findByName(name, res) {
        const company = await this.companyService.findByCompanyName(name);
        res.status(common_1.HttpStatus.OK).json(company);
    }
    async create(createCompanyDTO, res) {
        const companySaved = await this.companyService.create(createCompanyDTO);
        res.status(common_1.HttpStatus.CREATED).json(companySaved);
    }
    async update(id, updateComanyDto, res) {
        const companyUpdated = await this.companyService.update(id, updateComanyDto);
        res.status(common_1.HttpStatus.OK).json(companyUpdated);
    }
    async delete(id, res) {
        const companyDeleted = await this.companyService.delete(id);
        res.status(common_1.HttpStatus.OK).json(companyDeleted);
    }
    async findName(name, res) {
        const company = await this.companyService.findByCompanyName(name);
        res.status(common_1.HttpStatus.OK).json(company);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Req()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "find", null);
__decorate([
    common_1.Get('name/:name'),
    __param(0, common_1.Param('name')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "findByName", null);
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "delete", null);
__decorate([
    common_1.Get('name/:name'),
    __param(0, common_1.Param('name')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CompaniesController.prototype, "findName", null);
CompaniesController = __decorate([
    common_1.Controller('companies'),
    __metadata("design:paramtypes", [companies_service_1.CompaniesService])
], CompaniesController);
exports.CompaniesController = CompaniesController;
//# sourceMappingURL=companies.controller.js.map