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
const users_security_service_1 = require("../services/users-security.service");
const tokens_manager_1 = require("../utils/tokens.manager");
let SecurityController = class SecurityController {
    constructor(usersSecurityService, tokensManager) {
        this.usersSecurityService = usersSecurityService;
        this.tokensManager = tokensManager;
    }
    async login(loginDto, res) {
        try {
            const userLogged = await this.usersSecurityService.findToLogin(loginDto);
            if (userLogged) {
                const token = this.tokensManager.generateToken(userLogged);
                const loginData = {
                    user: userLogged,
                    token: token
                };
                res.status(common_1.HttpStatus.OK).json(loginData);
            }
            else {
                res.status(common_1.HttpStatus.UNAUTHORIZED).json(`User credentials invalid`);
            }
        }
        catch (err) {
            console.log(err);
            res.status(common_1.HttpStatus.UNAUTHORIZED).json(`User credentials invalid`);
        }
    }
};
__decorate([
    common_1.Post("login"),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SecurityController.prototype, "login", null);
SecurityController = __decorate([
    common_1.Controller('security'),
    __metadata("design:paramtypes", [users_security_service_1.UsersSecurityService,
        tokens_manager_1.TokensManager])
], SecurityController);
exports.SecurityController = SecurityController;
//# sourceMappingURL=security.controller.js.map