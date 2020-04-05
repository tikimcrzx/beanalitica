"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const company_status_enum_1 = require("../enums/company-status.enum");
const mongodb_1 = require("mongodb");
exports.CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100,
        unique: true,
    },
    contact: { type: mongodb_1.ObjectId, ref: 'Contact', required: true },
    status: { type: String, required: true, enum: company_status_enum_1.getAllCompanyStatus() },
}, { timestamps: true });
//# sourceMappingURL=company.schema.js.map