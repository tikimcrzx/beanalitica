"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
const roles_types_enum_1 = require("../../security/enums/roles-types.enum");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true, maxlength: 100 },
    email: {
        type: String,
        trim: true,
        required: true,
        index: true,
        maxlength: 200,
    },
    password: {
        type: String,
        select: false,
        trim: true,
        required: true,
        maxlength: 20,
    },
    status: { type: Boolean, required: true, default: true },
    roles: {
        type: [String],
        enum: roles_types_enum_1.getRolesForUsers(),
        required: true,
        default: [],
    },
    branch: { type: mongodb_1.ObjectId, select: false, ref: 'Branch', required: false },
    company: { type: mongodb_1.ObjectId, select: false, ref: 'Company', required: false },
}, { timestamps: true });
//# sourceMappingURL=user.schema.js.map