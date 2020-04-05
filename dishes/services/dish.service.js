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
let DishService = class DishService {
    constructor(dishModel) {
        this.dishModel = dishModel;
    }
    async create(createDishDTO) {
        const dish = new this.dishModel(createDishDTO);
        const dishSaved = await dish.save();
        return dishSaved;
    }
    async update(id, updateDishDTO) {
        const dishUpdated = await this.dishModel.findByIdAndUpdate(id, updateDishDTO);
        dishUpdated.save();
        const dish = await this.dishModel.findById(dishUpdated._id);
        return dish;
    }
    async findAll() {
        const dishes = await this.dishModel
            .find()
            .select('-details._id -createdAt -updatedAt -__v')
            .populate('ingredients', 'name');
        return dishes;
    }
    async findById(id) {
        const dish = await this.dishModel
            .findById(id)
            .select('-details._id -createdAt -updatedAt -__v')
            .populate('ingredients', 'name');
        return dish;
    }
    async findOne(name) {
        const dish = await this.dishModel
            .findOne({ name })
            .select('-details._id -createdAt -updatedAt -__v')
            .populate('ingredients', 'name');
        return dish;
    }
    messageBot(message, title, subtitle, imageUrl) {
        return {
            card: {
                title,
                subtitle,
                imageUrl,
                buttons: [
                    {
                        text: message,
                        postback: 'PostBack',
                    },
                ],
            },
        };
    }
};
DishService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel('Dish')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DishService);
exports.DishService = DishService;
//# sourceMappingURL=dish.service.js.map