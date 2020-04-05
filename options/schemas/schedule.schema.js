"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const weekday_enum_1 = require("../enums/weekday.enum");
exports.ScheduleSchema = new mongoose.Schema({
    weekDay: { type: Number, enum: weekday_enum_1.getAllWeekDays(), required: true },
    weekDayName: { type: String, enum: weekday_enum_1.getAllWeekDaysNames(), required: true },
    startHour: { type: Number, min: 0, max: 24, required: true },
    endHour: { type: Number, min: 0, max: 24, required: true },
    status: { type: Boolean, required: true }
}, { timestamps: true });
//# sourceMappingURL=schedule.schema.js.map