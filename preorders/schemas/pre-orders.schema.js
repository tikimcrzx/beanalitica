"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
exports.PreOrdersSchema = new mongoose.Schema({
    clientName: { type: String, trim: true, required: true, maxlength: 150 },
    dishes: { type: mongodb_1.ObjectId, ref: 'DishPreOrders', required: true },
    dateAndHour: { type: Date, required: true },
    total: { type: Number, required: true },
    subtotal: { type: Number, required: true },
    VAT: { type: Number, required: true },
    clientAddress: { type: String, required: true, maxlength: 150 },
    clientPhoneNumber: { type: String, required: true, maxlength: 15 },
    comments: { type: mongodb_1.ObjectId, required: true, ref: 'Comment' },
    status: { type: String, required: true },
}, { timestamps: true });
//# sourceMappingURL=pre-orders.schema.js.map