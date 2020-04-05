"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RolesTypes;
(function (RolesTypes) {
    RolesTypes["ADMIN"] = "admin";
    RolesTypes["ATTENDANT"] = "attendant";
})(RolesTypes = exports.RolesTypes || (exports.RolesTypes = {}));
function getRolesForUsers() {
    return [RolesTypes.ADMIN, RolesTypes.ATTENDANT];
}
exports.getRolesForUsers = getRolesForUsers;
function getRolesForUsersDTO() {
    return [
        { value: RolesTypes.ADMIN, description: 'Administrador' },
        { value: RolesTypes.ATTENDANT, description: 'Encargado' },
    ];
}
exports.getRolesForUsersDTO = getRolesForUsersDTO;
//# sourceMappingURL=roles-types.enum.js.map