"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transport = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
exports.transport = nodemailer_1.default.createTransport({
    port: 1025,
    ignoreTLS: true,
});
//# sourceMappingURL=transport.js.map