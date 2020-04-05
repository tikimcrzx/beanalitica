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
const user_types_enum_1 = require("../enums/user-types.enum");
let UsersSecurityService = class UsersSecurityService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async findToLogin(loginDto) {
        const user = await this.userModel.findOne({ email: loginDto.email, password: loginDto.password, status: true }, { password: 0 });
        const userLogged = {
            _id: user._id,
            name: user.name,
            email: user.email,
            roles: user.roles,
            type: user_types_enum_1.UserTypes.PLATFORM
        };
        return userLogged;
    }
    async findWithRoles(userId) {
        const user = await this.userModel
            .findById(userId)
            .populate("branch")
            .populate("company")
            .lean();
        return user;
    }
};
UsersSecurityService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel("User")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsersSecurityService);
exports.UsersSecurityService = UsersSecurityService;
//# sourceMappingURL=users-security.service.js.map