"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
var __param =
  (this && this.__param) ||
  function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const intents_enum_1 = require("../../main/enums/intents.enum");
let BranchesService = class BranchesService {
  constructor(branchModel) {
    this.branchModel = branchModel;
  }
  async create(createBranchDTO) {
    const branch = new this.branchModel(createBranchDTO);
    const branchSaved = await branch.save();
    return branchSaved;
  }
  async update(id, updateBranchDTO) {
    const branchUpdated = await this.branchModel.findById(id);
    branchUpdated.name = updateBranchDTO.name;
    branchUpdated.contact = updateBranchDTO.contact;
    branchUpdated.save();
    return branchUpdated;
  }
  async findAll() {
    const branches = await this.branchModel
      .find()
      .populate({
        path: "menu",
        model: "Dish",
        populate: { path: "ingredients", model: "Ingredient", select: "name" },
        select: "name",
      })
      .populate({
        path: "company",
        model: "Company",
        populate: {
          path: "contact",
          model: "Contact",
          select: "name phone address",
        },
        select: "name",
      })
      .select("-__v -createdAt -updatedAt");
    return branches;
  }
  async findById(id) {
    const branch = await this.branchModel
      .findById(id)
      .populate({
        path: "menu",
        model: "Dish",
        populate: { path: "ingredients", model: "Ingredient", select: "name" },
        select: "name",
      })
      .populate({
        path: "company",
        model: "Company",
        populate: {
          path: "contact",
          model: "Contact",
          select: "name phone address",
        },
        select: "name",
      })
      .select("-__v -createdAt -updatedAt");
    return branch;
  }
  async delete(id) {
    const branchDeleted = await this.branchModel.findById(id);
    if (!branchDeleted) {
      throw new common_1.NotFoundException(`Branch ${id} not found`);
    }
    branchDeleted.remove();
    return branchDeleted;
  }
  async findOne(name) {
    const branch = await this.branchModel
      .findOne({ name })
      .populate({
        path: "menu",
        model: "Dish",
        populate: { path: "ingredients", model: "Ingredient", select: "name" },
        select: "name",
      })
      .populate({
        path: "company",
        model: "Company",
        populate: {
          path: "contact",
          model: "Contact",
          select: "name phone address",
        },
        select: "name",
      })
      .select("-__v -createdAt -updatedAt");
    if (!branch) {
      throw new common_1.NotFoundException(`Branch ${name} not found`);
    }
    return branch;
  }
  async menu(name) {
    const branch = await this.branchModel
      .findOne({ name })
      .populate({
        path: "menu",
        model: "Dish",
        populate: { path: "ingredients", model: "Ingredient", select: "name" },
        select: "name image",
      })
      .populate({
        path: "company",
        model: "Company",
        populate: {
          path: "contact",
          model: "Contact",
          select: "name phone address",
        },
        select: "name",
      })
      .select("-__v -createdAt -updatedAt");
    let array = [];
    for (let index = 0; index < branch.menu.length; index++) {
      array.push(
        this.messageBots(
          branch.menu[index].name,
          branch.menu[index].name,
          branch.menu[index].name,
          branch.menu[index].image
        )
      );
    }
    return this.messageBots(
      branch.menu[0].name,
      branch.menu[0].name,
      branch.menu[0].name,
      branch.menu[0].image
    );
    return {
      fulfillmentText: branch.menu[0].name,
      source: "menu",
    };
    return { fulfillmentMessages: array };
  }
  messageBot(message, source) {
    return {
      fulfillmentText: message,
      source,
    };
  }
  messageBots(message, title, subtitle, imageUrl) {
    return {
      card: {
        title,
        subtitle,
        imageUrl,
        buttons: [
          {
            text: message,
            postback: "PostBack",
          },
        ],
      },
      plataform: "FACEBOOK",
    };
  }
  async responseBot(name, intent) {
    const branch = await this.branchModel.findOne({ name });
    let object;
    if (intent === intents_enum_1.Intents.LOCATION_RESTAURANT) {
      object = this.messageBot(
        `Hola estamos ubicados en ${branch.address}`,
        "restaurantLocation"
      );
    } else if (intent === intents_enum_1.Intents.SCHEDULE_RESTAURANT) {
      object = this.messageBot(
        `Hola nuestro horario es ${branch.schedule}`,
        "restaurantSchedule"
      );
    }
    return object;
  }
};
BranchesService = __decorate(
  [
    common_1.Injectable(),
    __param(0, mongoose_2.InjectModel("Branch")),
    __metadata("design:paramtypes", [mongoose_1.Model]),
  ],
  BranchesService
);
exports.BranchesService = BranchesService;
//# sourceMappingURL=branches.service.js.map
