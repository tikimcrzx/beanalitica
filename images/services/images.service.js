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
let ImagesService = class ImagesService {
    constructor(imageModel) {
        this.imageModel = imageModel;
    }
    async create(filters, imageData) {
        const image = new this.imageModel(imageData);
        image.company = filters.company;
        image.branch = filters.branch;
        const imageSaved = await image.save();
        return imageSaved;
    }
    async findById(filters, id) {
        filters["_id"] = id;
        const image = await this.imageModel.findOne(filters);
        if (!image) {
            throw new Notification(`Image ${id} not found`);
        }
        return image;
    }
};
ImagesService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel("Image")),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ImagesService);
exports.ImagesService = ImagesService;
//# sourceMappingURL=images.service.js.map