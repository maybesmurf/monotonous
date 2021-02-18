"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = exports.decodeJwt = exports.signJwt = void 0;
const fast_jwt_1 = require("fast-jwt");
const config_1 = require("@monotonous/config");
const sign = fast_jwt_1.createSigner({ key: config_1.config.auth.jwt.secret });
const decode = fast_jwt_1.createDecoder();
const verify = fast_jwt_1.createVerifier();
function signJwt() { }
exports.signJwt = signJwt;
function decodeJwt() { }
exports.decodeJwt = decodeJwt;
function verifyJwt() { }
exports.verifyJwt = verifyJwt;
//# sourceMappingURL=auth_service.js.map