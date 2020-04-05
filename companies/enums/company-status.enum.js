"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CompanyStatus;
(function (CompanyStatus) {
    CompanyStatus["ENABLED"] = "enabled";
    CompanyStatus["DISABLED"] = "disabled";
})(CompanyStatus = exports.CompanyStatus || (exports.CompanyStatus = {}));
function getAllCompanyStatus() {
    return [CompanyStatus.ENABLED, CompanyStatus.DISABLED];
}
exports.getAllCompanyStatus = getAllCompanyStatus;
//# sourceMappingURL=company-status.enum.js.map