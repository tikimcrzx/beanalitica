"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/AnaliticaChatBot';
exports.connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
    useCreateIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0,
};
//# sourceMappingURL=mongo.config.js.map