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
    return {
      messages: [
        {
          imageUrl: branch.menu[0].image,
          platform: "facebook",
          type: 3,
        },
      ],
    };
    return [
      {
        buttons: [
          {
            postback: "Card Link URL or text",
            text: "Card Link Title",
          },
        ],
        imageUrl: branch.menu[0].image,
        platform: "facebook",
        subtitle: "Card Subtitle",
        title: "Card Title",
        type: 1,
      },
    ];
    return this.reports();

    return this.messageBots(
      branch.menu[0].name,
      branch.menu[0].name,
      branch.menu[0].name,
      branch.menu[0].image
    );
    return { fulfillmentMessages: array };
  }
  messageBot(message, source) {
    return {
      fulfillmentText: message,
      source,
    };
  }

  reports() {
    return {
      responseId: "09f94691-32d8-4371-88e1-25b5bfbe6e0c-9aa0e9ed",
      queryResult: {
        queryText: "Elegir restaurante",
        parameters: {},
        allRequiredParamsPresent: true,
        fulfillmentText: "¿Que restaurante desea elegir?",
        fulfillmentMessages: [
          {
            text: {
              text: ["¿Que restaurante desea elegir?"],
            },
            platform: "FACEBOOK",
          },
          {
            card: {
              title: "Sushilito",
              subtitle: "Horario",
              imageUri:
                "https://lh3.googleusercontent.com/proxy/uEWzeVQLDVg4PIa_k7EBCu-cBrgJT-A7dAYMOQFYERZFkOAUlBZvTSeY-zEFIWMDPkzLmImVpInAzF1-Tf-V9locYnx72oJhZFVqxu6l0NiRHdPz5Q",
              buttons: [
                {
                  text: "Sushilito",
                },
              ],
            },
            platform: "FACEBOOK",
          },
          {
            card: {
              title: "Sushi Van",
              subtitle: "Horario",
              imageUri:
                "https://www.vamosalantro.com/usuariosva/fotos/113681.jpg",
              buttons: [
                {
                  text: "Sushi Van",
                },
              ],
            },
            platform: "FACEBOOK",
          },
          {
            card: {
              title: "La Panga",
              subtitle: "Horario",
              imageUri:
                "https://i0.wp.com/foodandpleasure.com/wp-content/uploads/2018/06/piantao-3.jpg?fit=2800%2C1867&ssl=1",
              buttons: [
                {
                  text: "La Panga",
                },
              ],
            },
            platform: "FACEBOOK",
          },
          {
            card: {
              title: "Gana Grup",
              subtitle: "Horario",
              imageUri:
                "https://cherry-brightspot.s3.amazonaws.com/0e/30/84a63a174e489e99a593ee483ed5/buffalo-wild-wings-sucursal.jpeg",
              buttons: [
                {
                  text: "Gana Grup",
                },
              ],
            },
            platform: "FACEBOOK",
          },
          {
            text: {
              text: ["¿Que restaurante desea elegir?"],
            },
          },
        ],
        intent: {
          name:
            "projects/chatbot-bsifjs/agent/intents/15137fa3-f7e8-4c5c-acf6-dad3323aec3a",
          displayName: "Restaurants",
        },
        intentDetectionConfidence: 1,
        languageCode: "es",
      },
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
