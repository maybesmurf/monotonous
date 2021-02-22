import { Job, Queue, Worker } from 'bullmq';
import { EmailDispatcher, ISendEmailConfirmation } from '@monotonous/email';

const queueName = 'email';
const queue = new Queue(queueName);

const JobNames = {
  EMAIL_CONFIRMATION: 'email_confirmation',
  LOGIN_LINK: 'login_link',
};

const jobs = {
  [JobNames.EMAIL_CONFIRMATION]: async (job: Job<ISendEmailConfirmation>) => {
    await EmailDispatcher.sendEmailConfirmation(job.data);
  },
  [JobNames.LOGIN_LINK]: async job => {
    throw new Error('Not implemented');
  },
};

/**
 * @name initWorker
 * Initialize the worker so it begins to watch our redus queues for jobs to process.
 */
export function initWorker() {
  new Worker(queueName, async job => {
    try {
      await jobs[job.name]?.(job);
      return true;
    } catch (e) {
      throw new Error(e);
    }
  });
}

/**
 * @name queueEmailConfirmation
 * Add an email confirmation email to the queue.
 */
export async function queueEmailConfirmation(data: ISendEmailConfirmation) {
  await queue.add(JobNames.EMAIL_CONFIRMATION, data);
}
