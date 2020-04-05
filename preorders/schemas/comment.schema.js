"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.CommentSchema = new mongoose.Schema({
    comment: { type: String, required: true, maxlength: 250 },
}, { timestamps: true });
//# sourceMappingURL=comment.schema.js.map