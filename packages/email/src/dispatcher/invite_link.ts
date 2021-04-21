import { htmlToText } from "html-to-text";
import { compileTemplate } from "../compile_template";
import { sendEmail } from "../transport";

const render = compileTemplate("invite_link");

export interface ISendInviteLink {
  to: string;
  inviteId: string;
}

export async function sendInviteLink(params: ISendInviteLink) {
  const html = render(params);
  const text = htmlToText(html);

  const message = {
    from: '"Monotonous" <hello@monotonousrepo.com>',
    to: params.to,
    subject: "Monotonous Invite",
    text,
    html,
  };

  return sendEmail(message);
}
