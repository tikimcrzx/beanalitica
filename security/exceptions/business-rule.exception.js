"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class BusinessRuleException extends common_1.HttpException {
    constructor(message) {
        super(message, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.BusinessRuleException = BusinessRuleException;
//# sourceMappingURL=business-rule.exception.js.map