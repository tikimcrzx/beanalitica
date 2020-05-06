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
const intents_enum_1 = require("../enums/intents.enum");
const url_enum_1 = require("../enums/url.enum");
let HomeController = class HomeController {
    async home(intentParametersDTO, res) {
        let url = '';
        const displayName = intentParametersDTO.queryResult.intent.displayName;
        if (displayName === intents_enum_1.Intents.LOCATION_RESTAURANT) {
            url = url_enum_1.URLs.MENU_URL;
        }
        else if (displayName === intents_enum_1.Intents.SCHEDULE_RESTAURANT) {
            url = url_enum_1.URLs.SCHEDULE_URL;
        }
        else if (displayName === intents_enum_1.Intents.MENU_RESTAURANT) {
            url = url_enum_1.URLs.MENU_URL;
        }
        res.redirect(common_1.HttpStatus.TEMPORARY_REDIRECT, url);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], HomeController.prototype, "home", null);
HomeController = __decorate([
    common_1.Controller('home')
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=home.controller.js.map