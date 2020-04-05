"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
exports.DishPreOrdersSchema = new mongoose.Schema({
    quantity: { type: Number },
    dishes: [
        {
            name: { type: mongodb_1.ObjectId, ref: 'Dish' },
            size: { type: mongodb_1.ObjectId, ref: 'Size' },
        },
    ],
    comments: [{ type: mongodb_1.ObjectId, ref: 'Comments' }],
    total: { type: Number },
}, { timestamps: true });
//# sourceMappingURL=dished-pre-orders.schema.js.map