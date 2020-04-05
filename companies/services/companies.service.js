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
let CompaniesService = class CompaniesService {
    constructor(companyModel) {
        this.companyModel = companyModel;
    }
    async create(createCompanyDTO) {
        const company = new this.companyModel(createCompanyDTO);
        const companySaved = await company.save();
        return companySaved;
    }
    async update(id, updateCompanyDTO) {
        const companyUpdated = await this.companyModel.findByIdAndUpdate(id, updateCompanyDTO);
        if (!companyUpdated) {
            throw new common_1.NotFoundException(`Company ${id} not found`);
        }
        return companyUpdated;
    }
    async delete(id) {
        const companyDeleted = await this.companyModel.findOneAndDelete(id);
        if (!companyDeleted) {
            throw new common_1.NotFoundException(`Company ${id} not found`);
        }
        return companyDeleted;
    }
    async findAll() {
        const companies = await this.companyModel
            .find()
            .populate('contact', '-__v -createdAt -updatedAt -_id')
            .select('-createdAt -updatedAt -__v');
        return companies;
    }
    async findById(id) {
        const company = await this.companyModel
            .findById(id)
            .populate('contact', '-__v -createdAt -updatedAt -_id')
            .select('-createdAt -updatedAt -__v');
        return company;
    }
    async findByCompanyName(name) {
        const company = await this.companyModel
            .findOne({
            name: { $regex: 'i' },
        })
            .populate('contact', '-__v -createdAt -updatedAt -_id')
            .select('-createdAt -updatedAt -__v');
        return company;
    }
};
CompaniesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Company')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CompaniesService);
exports.CompaniesService = CompaniesService;
//# sourceMappingURL=companies.service.js.map