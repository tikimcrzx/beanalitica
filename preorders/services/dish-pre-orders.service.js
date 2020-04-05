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
let DishPreOrdersService = class DishPreOrdersService {
    constructor(dishPreOrdersModel) {
        this.dishPreOrdersModel = dishPreOrdersModel;
    }
    async create(createDishPreOrders) {
        const dishPreOrders = new this.dishPreOrdersModel(createDishPreOrders);
        const dishPreOrdersSaved = await dishPreOrders.save();
        const dishes = await this.dishPreOrdersModel
            .findById(dishPreOrdersSaved.id)
            .populate({ path: 'dishes.size', model: 'Size' });
        let total = 0;
        dishPreOrders.total = total;
        dishPreOrders.save();
        return dishPreOrdersSaved;
    }
    async update(id, updateDishedPreOrders) {
        const dishPreOrdersUpdated = await this.dishPreOrdersModel.findById(id);
        dishPreOrdersUpdated.quantity = updateDishedPreOrders.quantity;
        dishPreOrdersUpdated.comments = updateDishedPreOrders.comments;
        dishPreOrdersUpdated.save();
        return dishPreOrdersUpdated;
    }
    async findAll() {
        const dishPreOrders = await this.dishPreOrdersModel.find();
        dishPreOrders;
        return dishPreOrders;
    }
    async findById(id) {
        const dishPreOrders = await this.dishPreOrdersModel.findById(id);
        return dishPreOrders;
    }
    async delete(id) {
        const dishPreOrdersDeleted = await this.dishPreOrdersModel.findById(id);
        dishPreOrdersDeleted.remove();
        return dishPreOrdersDeleted;
    }
};
DishPreOrdersService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('DishedPreOrders')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DishPreOrdersService);
exports.DishPreOrdersService = DishPreOrdersService;
//# sourceMappingURL=dish-pre-orders.service.js.map