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
const exceptions_1 = require("../../security/exceptions");
let IngredientService = class IngredientService {
    constructor(ingredientModel) {
        this.ingredientModel = ingredientModel;
    }
    async create(createIngredientDTO) {
        const isIngredientDuplicated = await this.checkIngredientDuplication(createIngredientDTO.name);
        if (isIngredientDuplicated) {
            throw new exceptions_1.BusinessRuleException(`Ingredient name ${createIngredientDTO.name} duplicated`);
        }
        const ingredient = new this.ingredientModel(createIngredientDTO);
        const ingredientSaved = await ingredient.save();
        return ingredientSaved;
    }
    async update(id, updateIngredientDTO) {
        const ingredientUpdated = await this.ingredientModel.findById(id);
        ingredientUpdated.name = updateIngredientDTO.name;
        ingredientUpdated.save();
        return ingredientUpdated;
    }
    async findAll() {
        const ingredients = await this.ingredientModel.find();
        return ingredients;
    }
    async findById(id) {
        const ingredient = await this.ingredientModel.findById(id);
        return ingredient;
    }
    async findOne(name) {
        const ingredient = await this.ingredientModel.findOne({ name });
        return ingredient;
    }
    async delete(id) {
        const ingredient = await this.ingredientModel.findByIdAndDelete(id);
        return ingredient;
    }
    async checkIngredientDuplication(name) {
        const ingredient = await this.ingredientModel
            .findOne({
            name: { $regex: name, $options: 'i' },
        })
            .lean();
        if (ingredient) {
            return Promise.resolve(true);
        }
        else {
            return Promise.resolve(false);
        }
    }
};
IngredientService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Ingredient')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], IngredientService);
exports.IngredientService = IngredientService;
//# sourceMappingURL=ingredient.service.js.map