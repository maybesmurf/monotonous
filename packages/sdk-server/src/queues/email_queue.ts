import { Job, Queue, Worker } from 'bullmq';
import EmailDispatcher, {
  ISendEmailConfirmation,
  IResetPasswordParams,
} from '@monotonous/email';

const queueName = 'email';
const queue = new Queue(queueName);

const jobs = {
  emailConfirmation: {
    name: 'email_confirmation',
    handler: processEmailConfrimation,
  },
  resetPassword: {
    name: 'reset_password',
    handler: processResetPassword,
  },
};

export function initWorker() {
  new Worker(queueName, async job => {
    await jobs[job.name]?.handler?.(job);
  });
}

/**
 * Send Email Confirmation
 */
interface EmailConfirmationData {
  to: string;
  params: ISendEmailConfirmation;
}

export async function queueEmailConfirmation(data: EmailConfirmationData) {
  return queue.add(jobs.emailConfirmation.name, data);
}

export async function processEmailConfrimation({
  data,
}: Job<EmailConfirmationData>) {
  await EmailDispatcher.sendEmailConfirmation(data.to, data.params);
}

/**
 * Reset Password
 */
export async function queueResetPassword(data: IResetPasswordParams) {
  return queue.add(jobs.emailConfirmation.name, data);
}

export async function processResetPassword({
  data,
}: Job<IResetPasswordParams>) {
  await EmailDispatcher.resetPassword(data);
}
