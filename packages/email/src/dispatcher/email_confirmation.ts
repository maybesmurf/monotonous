import { htmlToText } from 'html-to-text';
import { compileTemplate } from '../compile_template';
import { transport } from '../transport';

const render = compileTemplate('email_confirmation');

export interface ISendEmailConfirmation {
  firstName: string;
  lastName: string;
  token: string;
}

export async function sendEmailConfirmation(
  to: string,
  params: ISendEmailConfirmation
) {
  const html = render(params);
  const text = htmlToText(html);

  const message = {
    from: '"Monotonous" <hello@monotonousrepo.com>',
    to: `${params.firstName} ${params.lastName} <${to}>`,
    subject: 'Email Confirmation',
    text,
    html,
  };

  return transport.sendMail(message);
}
