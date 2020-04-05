"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100,
        unique: true,
    },
    phone: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        maxlength: 20,
        unique: true,
    },
    address: { type: String, unique: true },
}, { timestamps: true });
//# sourceMappingURL=contact.shema.js.map