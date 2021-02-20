import { Job, Queue, Worker } from 'bullmq';
import EmailDispatcher, {
  ISendEmailConfirmationParams,
} from '@monotonous/email';

const queueName = 'email';
const queue = new Queue(queueName);

const JobNames = {
  EMAIL_CONFIRMATION: 'email_confirmation',
};

const jobs = {
  [JobNames.EMAIL_CONFIRMATION]: async (
    job: Job<ISendEmailConfirmationParams>
  ) => {
    await EmailDispatcher.sendEmailConfirmation(job.data);
  },
};

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

export async function queueEmailConfirmation(
  data: ISendEmailConfirmationParams
) {
  await queue.add(JobNames.EMAIL_CONFIRMATION, data);
}
