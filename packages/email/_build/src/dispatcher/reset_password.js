"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = void 0;
const transport_1 = require("../transport");
async function resetPassword({ user }) {
    const message = {
        from: '"Chapter Chat" <librarian@chapter.chat>',
        to: user.email,
        subject: 'Password Reset',
        text: 'Hello world?',
        html: '<b>Hello world?</b>',
    };
    return transport_1.transport.sendMail(message);
}
exports.resetPassword = resetPassword;
//# sourceMappingURL=reset_password.js.map