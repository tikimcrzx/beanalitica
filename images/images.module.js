"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const images_service_1 = require("./services/images.service");
const images_controller_1 = require("./controllers/images.controller");
const mongoose_1 = require("@nestjs/mongoose");
const image_schema_1 = require("./schemas/image.schema");
const security_module_1 = require("../security/security.module");
let ImagesModule = class ImagesModule {
};
ImagesModule = __decorate([
    common_1.Module({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: "Image", schema: image_schema_1.ImageSchema, collection: "images" }
            ]), security_module_1.SecurityModule],
        providers: [images_service_1.ImagesService],
        controllers: [images_controller_1.ImagesController]
    })
], ImagesModule);
exports.ImagesModule = ImagesModule;
//# sourceMappingURL=images.module.js.map