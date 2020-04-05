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
const pre_orders_service_1 = require("../services/pre-orders.service");
let PreOrdersController = class PreOrdersController {
    constructor(preOrdersService) {
        this.preOrdersService = preOrdersService;
    }
    async create(createPreOrders, res) {
        const preOrderCreated = await this.preOrdersService.create(createPreOrders);
        res.status(common_1.HttpStatus.CREATED).json(preOrderCreated);
    }
    async findAll(res) {
        const preOrders = await this.preOrdersService.findAll();
        res.status(common_1.HttpStatus.OK).json(preOrders);
    }
    async findById(id, res) {
        const preOrder = await this.preOrdersService.findById(id);
        res.status(common_1.HttpStatus.OK).json(preOrder);
    }
    async update(id, updatePreorderDTO, res) {
        const preOrderUpdated = await this.preOrdersService.update(id, updatePreorderDTO);
        res.status(common_1.HttpStatus.OK).json(preOrderUpdated);
    }
    async delete(id, res) {
        const preOrderDeleted = await this.preOrdersService.delete(id);
        res.status(common_1.HttpStatus.OK).json(preOrderDeleted);
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PreOrdersController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PreOrdersController.prototype, "findAll", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PreOrdersController.prototype, "findById", null);
__decorate([
    common_1.Put(':id'),
    __param(0, common_1.Param('id')),
    __param(1, common_1.Body()),
    __param(2, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], PreOrdersController.prototype, "update", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PreOrdersController.prototype, "delete", null);
PreOrdersController = __decorate([
    common_1.Controller('preorders'),
    __metadata("design:paramtypes", [pre_orders_service_1.PreOrdersService])
], PreOrdersController);
exports.PreOrdersController = PreOrdersController;
//# sourceMappingURL=pre-orders.controller.js.map