"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const branch_status_enum_1 = require("../enums/branch-status.enum");
const mongodb_1 = require("mongodb");
exports.BranchSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true, maxlength: 100 },
    contact: { type: mongodb_1.ObjectId, ref: 'Contact', required: true },
    schedule: { type: String, required: true },
    status: { type: String, required: true, enum: branch_status_enum_1.getAllBranchStatus() },
    company: { type: mongodb_1.ObjectId, ref: 'Company' },
    menu: [{ type: mongodb_1.ObjectId, ref: 'Dish', required: true }],
}, { timestamps: true });
//# sourceMappingURL=branch.schema.js.map