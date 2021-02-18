"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailConfirmation = void 0;
const html_to_text_1 = require("html-to-text");
const compile_template_1 = require("../compile_template");
const transport_1 = require("../transport");
const render = compile_template_1.compileTemplate('email_confirmation');
async function sendEmailConfirmation(to, params) {
    const html = render(params);
    const text = html_to_text_1.htmlToText(html);
    const message = {
        from: '"Chapter Chat" <hello@chapter.chat>',
        to: `${params.firstName} ${params.lastName} <${to}>`,
        subject: 'Email Confirmation',
        text,
        html,
    };
    return transport_1.transport.sendMail(message);
}
exports.sendEmailConfirmation = sendEmailConfirmation;
//# sourceMappingURL=email_confirmation.js.map