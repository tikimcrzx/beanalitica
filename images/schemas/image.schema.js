"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
const image_descriptions_enum_1 = require("../enums/image-descriptions.enum");
exports.ImageSchema = new mongoose.Schema({
    description: { type: String, required: true, enum: image_descriptions_enum_1.getAllImageDescriptions() },
    data: { type: Buffer, required: true },
    contentType: { type: String, required: true },
    size: { type: Number, required: true, max: 2000000 },
    branch: { type: mongodb_1.ObjectId, select: false, ref: "Branch", required: true },
    company: { type: mongodb_1.ObjectId, select: false, ref: "Company", required: true }
}, { timestamps: true });
//# sourceMappingURL=image.schema.js.map