"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const mongodb_1 = require("mongodb");
const schedule_schema_1 = require("./schedule.schema");
exports.OptionsSchema = new mongoose.Schema({
    schedules: { type: [schedule_schema_1.ScheduleSchema], required: true },
    branch: { type: mongodb_1.ObjectId, select: false, ref: "Branch", required: false },
    company: { type: mongodb_1.ObjectId, select: false, ref: "Company", required: false }
}, { timestamps: true });
//# sourceMappingURL=options.schema.js.map