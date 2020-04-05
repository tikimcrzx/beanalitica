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
const dish_service_1 = require("../services/dish.service");
let DishesController = class DishesController {
    constructor(dishesServices) {
        this.dishesServices = dishesServices;
    }
    async create(createDish, res) {
        const dish = await this.dishesServices.create(createDish);
        res.status(common_1.HttpStatus.CREATED).json(dish);
    }
    async findAll(res) {
        const dishes = await this.dishesServices.findAll();
        res.status(common_1.HttpStatus.OK).json(dishes);
    }
    async findOne(id, res) {
        const dish = await this.dishesServices.findById(id);
        res.status(common_1.HttpStatus.OK).json(dish);
    }
    async update(id, updateDishDTO, res) {
        const dish = await this.dishesServices.update(id, updateDishDTO);
        res.status(common_1.HttpStatus.OK).json(dish);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "findOne", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], DishesController.prototype, "update", null);
DishesController = __decorate([
    common_1.Controller('dishes'),
    __metadata("design:paramtypes", [dish_service_1.DishService])
], DishesController);
exports.DishesController = DishesController;
//# sourceMappingURL=dish.controller.js.map