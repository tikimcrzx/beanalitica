"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
const config = require("../config");
let TokensManager = class TokensManager {
    generateToken(userDTO) {
        return jwt.sign(userDTO, config.adminTokenPhrase, {
            expiresIn: config.adminTokenTimeout,
            algorithm: "HS512"
        });
    }
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, config.adminTokenPhrase, (err, tokenDecoded) => {
                if (err) {
                    reject("Token validation error");
                }
                else {
                    resolve(tokenDecoded);
                }
            });
        });
    }
};
TokensManager = __decorate([
    common_1.Injectable()
], TokensManager);
exports.TokensManager = TokensManager;
//# sourceMappingURL=tokens.manager.js.map