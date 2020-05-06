"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
exports.DishPreOrdersSchema = new mongoose.Schema({
    quantity: { type: Number },
    dishes: { type: mongodb_1.ObjectId, ref: 'Dish' },
}, { timestamps: true });
//# sourceMappingURL=dished-pre-orders.schema.js.map