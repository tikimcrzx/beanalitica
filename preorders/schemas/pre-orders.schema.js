"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
exports.PreOrdersSchema = new mongoose.Schema({
    dishes: { type: mongodb_1.ObjectId, ref: 'DishPreOrders', required: true },
    dateAndHour: { type: Date, required: true },
    total: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    clientAddress: { type: String, maxlength: 150 },
    clientPhoneNumber: { type: String, maxlength: 15 },
    status: { type: String, required: true },
}, { timestamps: true });
//# sourceMappingURL=pre-orders.schema.js.map