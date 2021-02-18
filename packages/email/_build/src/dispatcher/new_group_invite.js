"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newGroupInvite = void 0;
const transport_1 = require("../transport");
async function newGroupInvite({ user }) {
    const message = {
        from: '"Chapter Chat" <hello@chapter.chat>',
        to: user.email,
        subject: 'Password Reset',
        text: 'Hello world?',
        html: '<b>Hello world?</b>',
    };
    return transport_1.transport.sendMail(message);
}
exports.newGroupInvite = newGroupInvite;
//# sourceMappingURL=new_group_invite.js.map