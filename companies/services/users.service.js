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
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const user_fields_constants_1 = require("../utils/user-fields.constants");
const exceptions_1 = require("../../security/exceptions");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(filters, createUserDto) {
        const isEmailDuplicated = await this.checkEmailDuplication(filters, createUserDto.email);
        if (isEmailDuplicated) {
            throw new exceptions_1.BusinessRuleException(`User email: ${createUserDto.email} duplicated`);
        }
        const user = new this.userModel(createUserDto);
        user.company = filters.company;
        user.branch = filters.branch;
        const userSaved = await user.save();
        return userSaved;
    }
    async update(filters, userUpdated) {
        filters[user_fields_constants_1.ID] = userUpdated._id;
        let userSaved = await this.userModel.findOne(filters);
        if (!userSaved) {
            throw new common_1.NotFoundException(`User ${userUpdated._id} not found`);
        }
        userSaved.name = userUpdated.name;
        userSaved.status = userUpdated.status;
        userSaved.roles = userUpdated.roles;
        if (userSaved.password) {
            userSaved.password = userUpdated.password;
        }
        userSaved = await userSaved.save();
        return userSaved;
    }
    async delete(filters, id) {
        filters[user_fields_constants_1.ID] = id;
        const user = await this.userModel.findOne(filters);
        if (!user) {
            throw new common_1.NotFoundException(`User ${id} not found`);
        }
        const userRemoved = await user.remove();
        return userRemoved;
    }
    async findAll(filters) {
        const users = await this.userModel.find(filters).lean();
        return users;
    }
    async findById(filters, id) {
        filters[user_fields_constants_1.ID] = id;
        const user = await this.userModel.findOne(filters).lean();
        if (!user) {
            throw new common_1.NotFoundException(`User ${id} not found`);
        }
        return user;
    }
    async findByName(filters, name) {
        filters[user_fields_constants_1.NAME] = { $regex: name, $options: 'i' };
        const user = await this.userModel.findOne(filters).lean();
        return user;
    }
    async checkEmailDuplication(filters, email) {
        filters[user_fields_constants_1.EMAIL] = { $regex: email, $options: 'i' };
        const user = await this.userModel.findOne(filters).lean();
        if (user) {
            return Promise.resolve(true);
        }
        else {
            return Promise.resolve(false);
        }
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel('User')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map