"use strict";
var __decorate = (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r = c < 3
        ? target
        : desc === null
        ? desc = Object.getOwnPropertyDescriptor(target, key)
        : desc,
      d;
    if (
      typeof Reflect === "object" && typeof Reflect.decorate === "function"
    ) {
      r = Reflect.decorate(decorators, target, key, desc);
    } else {
      for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) {
          r = (c < 3
            ? d(r)
            : c > 3
            ? d(target, key, r)
            : d(target, key)) || r;
        }
      }
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata = (this && this.__metadata) || function (k, v) {
  if (
    typeof Reflect === "object" && typeof Reflect.metadata === "function"
  ) {
    return Reflect.metadata(k, v);
  }
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PreOrdersService = class PreOrdersService {
  constructor(preOrdersModel) {
    this.preOrdersModel = preOrdersModel;
  }
  async create(createPreOrdersDTO) {
    const preOrders = new this.preOrdersModel(createPreOrdersDTO);
    return preOrders;
  }
  async update(id, updatePreOrdersDTO) {
    const preOrdersUpdated = await this.preOrdersModel.findById(id);
    preOrdersUpdated.dishes = updatePreOrdersDTO.dishes;
    preOrdersUpdated.dateAndHour = updatePreOrdersDTO.dateAndHour;
    preOrdersUpdated.total = updatePreOrdersDTO.total;
    preOrdersUpdated.subtotal = updatePreOrdersDTO.subtotal;
    preOrdersUpdated.VAT = updatePreOrdersDTO.VAT;
    preOrdersUpdated.clientAddress = updatePreOrdersDTO.clientAddress;
    preOrdersUpdated.clientPhoneNumber = updatePreOrdersDTO.clientPhoneNumber;
    preOrdersUpdated.comment = updatePreOrdersDTO.comment;
    preOrdersUpdated.status = updatePreOrdersDTO.status;
    preOrdersUpdated.save();
    return preOrdersUpdated;
  }
  async findAll() {
    const preOrders = await this.preOrdersModel.find();
    return preOrders;
  }
  async findById(id) {
    const preOrders = await this.preOrdersModel.findById(id);
    return preOrders;
  }
  async delete(id) {
    const preOrdersDeleted = await this.preOrdersModel.findById(id);
    preOrdersDeleted.remove();
    return preOrdersDeleted;
  }
};
PreOrdersService = __decorate([
  common_1.Injectable(),
  __param(0, mongoose_1.InjectModel("PreOrders")),
  __metadata("design:paramtypes", [mongoose_2.Model]),
], PreOrdersService);
exports.PreOrdersService = PreOrdersService;
//# sourceMappingURL=pre-orders.service.js.map
