"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogTypes;
(function (LogTypes) {
    LogTypes["DATABASE_ERROR"] = "database_error";
    LogTypes["BUSINESS_ERROR"] = "business_error";
    LogTypes["ERROR"] = "error";
    LogTypes["INFO"] = "info";
})(LogTypes = exports.LogTypes || (exports.LogTypes = {}));
function getAllLogTypes() {
    return [
        LogTypes.ERROR,
        LogTypes.DATABASE_ERROR,
        LogTypes.BUSINESS_ERROR,
        LogTypes.INFO
    ];
}
exports.getAllLogTypes = getAllLogTypes;
//# sourceMappingURL=log-types.enum.js.map