"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
const log_types_enum_1 = require("../enums/log-types.enum");
exports.LogSchema = new mongoose.Schema({
    type: { type: String, enum: log_types_enum_1.getAllLogTypes(), default: log_types_enum_1.LogTypes.ERROR },
    statusCode: { type: Number, required: true },
    message: { type: String, required: true },
    path: { type: String, required: true },
    method: { type: String, required: true },
    body: { type: String, required: true },
    user: { type: mongodb_1.ObjectId, ref: "User", required: true },
    branch: { type: mongodb_1.ObjectId, ref: "Branch", required: false },
    company: { type: mongodb_1.ObjectId, ref: "Company", required: false }
}, { timestamps: true });
//# sourceMappingURL=log.schema.js.map