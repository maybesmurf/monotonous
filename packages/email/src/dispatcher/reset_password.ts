import { transport } from '../transport';

export interface IResetPasswordParams {
  user: {
    email: string;
    displayName: string;
    username: string;
  };
}

export async function resetPassword({ user }: IResetPasswordParams) {
  const message = {
    from: '"Chapter Chat" <librarian@chapter.chat>',
    to: user.email,
    subject: 'Password Reset',
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  };

  return transport.sendMail(message);
}
