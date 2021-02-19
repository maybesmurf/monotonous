import { Job, Queue, Worker } from 'bullmq';
import EmailDispatcher, {
  ISendEmailConfirmationParams,
  IResetPasswordParams,
} from '@monotonous/email';

const queueName = 'email';
const queue = new Queue(queueName);

const jobs = {
  emailConfirmation: {
    name: 'email_confirmation',
    handler: async (job: Job<ISendEmailConfirmationParams>) => {
      return EmailDispatcher.sendEmailConfirmation(job.data);
    },
  },
  resetPassword: {
    name: 'reset_password',
    handler: async (job: Job<IResetPasswordParams>) => {
      return EmailDispatcher.resetPassword(job.data);
    },
  },
};

export function initWorker() {
  new Worker(queueName, async job => {
    await jobs[job.name]?.handler(job);
  });
}

export async function queueEmailConfirmation(
  data: ISendEmailConfirmationParams
) {
  return queue.add(jobs.emailConfirmation.name, data);
}

export async function queueResetPassword(data: IResetPasswordParams) {
  return queue.add(jobs.emailConfirmation.name, data);
}
