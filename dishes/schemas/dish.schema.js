"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
const dish_sizes_enum_1 = require("../enums/dish-sizes.enum");
exports.DishSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: [
    { type: mongodb_1.ObjectId, ref: "Ingredient", required: true },
  ],
  image: { type: String, maxlength: 200 },
  details: [
    {
      size: {
        type: String,
        enum: dish_sizes_enum_1.getAllDishSizes(),
        required: true,
      },
      price: { type: Number, required: true },
    },
  ],
}, { timestamps: true });
//# sourceMappingURL=dish.schema.js.map
