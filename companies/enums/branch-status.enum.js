"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BranchStatus;
(function (BranchStatus) {
    BranchStatus["ENABLED"] = "enabled";
    BranchStatus["DISABLED"] = "disabled";
})(BranchStatus = exports.BranchStatus || (exports.BranchStatus = {}));
function getAllBranchStatus() {
    return [BranchStatus.ENABLED, BranchStatus.DISABLED];
}
exports.getAllBranchStatus = getAllBranchStatus;
//# sourceMappingURL=branch-status.enum.js.map