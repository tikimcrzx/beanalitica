"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
exports.transports = [
    new winston.transports.Console({
        format: winston.format.combine(winston.format.timestamp(), winston.format.simple(), winston.format.colorize()),
    }),
    new winston.transports.File({
        filename: 'info.log',
        format: winston.format.combine(winston.format.timestamp(), winston.format.simple(), winston.format.colorize()),
    }),
];
//# sourceMappingURL=winston.config.js.map