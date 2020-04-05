"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.IngredientSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 100,
        unique: true,
    },
}, { timestamps: true });
//# sourceMappingURL=ingredient.schema.js.map