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
const platform_express_1 = require("@nestjs/platform-express");
const roles_decorator_1 = require("../../security/decorators/roles.decorator");
const roles_types_enum_1 = require("../../security/enums/roles-types.enum");
const image_descriptions_enum_1 = require("../enums/image-descriptions.enum");
const images_service_1 = require("../services/images.service");
let ImagesController = class ImagesController {
    constructor(imagesService) {
        this.imagesService = imagesService;
    }
    async uploadOrderSignature(image, req, res) {
        if (!image) {
            throw new common_1.BadRequestException(`Image not sent`);
        }
        else {
            const filters = req.companyFilters;
            const imageToSave = {
                description: image_descriptions_enum_1.ImageDescriptions.SIGNATURE_PHOTO,
                data: image.buffer,
                contentType: image.mimetype,
                size: image.size
            };
            const imageSaved = await this.imagesService.create(filters, imageToSave);
            res.status(common_1.HttpStatus.OK).json(imageSaved);
        }
    }
    async findById(id, req, res) {
        const filters = req.companyFilters;
        const image = await this.imagesService.findById(filters, id);
        res.setHeader("content-type", image.contentType);
        res.send(image.data);
    }
};
__decorate([
    common_1.Post('upload/ordersignature'),
    common_1.UseInterceptors(platform_express_1.FileInterceptor("image")),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN, roles_types_enum_1.RolesTypes.ATTENDANT),
    __param(0, common_1.UploadedFile()), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "uploadOrderSignature", null);
__decorate([
    common_1.Get(":id"),
    roles_decorator_1.Roles(roles_types_enum_1.RolesTypes.ADMIN, roles_types_enum_1.RolesTypes.ATTENDANT),
    __param(0, common_1.Param("id")), __param(1, common_1.Req()), __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], ImagesController.prototype, "findById", null);
ImagesController = __decorate([
    common_1.Controller('images'),
    __metadata("design:paramtypes", [images_service_1.ImagesService])
], ImagesController);
exports.ImagesController = ImagesController;
//# sourceMappingURL=images.controller.js.map