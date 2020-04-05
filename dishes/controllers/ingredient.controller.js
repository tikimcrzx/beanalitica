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
const ingredient_service_1 = require("../services/ingredient.service");
let IngredientsController = class IngredientsController {
    constructor(ingredientService) {
        this.ingredientService = ingredientService;
    }
    async create(createIngredient, res) {
        const ingredient = await this.ingredientService.create(createIngredient);
        res.status(common_1.HttpStatus.CREATED).json(ingredient);
    }
    async update(id, updateIngredient, res) {
        const ingredient = await this.ingredientService.update(id, updateIngredient);
        res.status(common_1.HttpStatus.OK).json(ingredient);
    }
    async findAll(res) {
        const ingredients = await this.ingredientService.findAll();
        res.status(common_1.HttpStatus.OK).json(ingredients);
    }
    async findOne(id, res) {
        const ingredient = await this.ingredientService.findById(id);
        res.status(common_1.HttpStatus.OK).json(ingredient);
    }
    async delete(id, res) {
        const ingredient = await this.ingredientService.delete(id);
        res.status(common_1.HttpStatus.OK).json(ingredient);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "create", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "update", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "findOne", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IngredientsController.prototype, "delete", null);
IngredientsController = __decorate([
    common_1.Controller('ingredients'),
    __metadata("design:paramtypes", [ingredient_service_1.IngredientService])
], IngredientsController);
exports.IngredientsController = IngredientsController;
//# sourceMappingURL=ingredient.controller.js.map