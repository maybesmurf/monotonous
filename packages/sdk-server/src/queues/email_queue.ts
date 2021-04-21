import { Job, Queue, Worker } from "bullmq";
import {
  EmailDispatcher,
  ISendEmailConfirmation,
  ISendInviteLink,
  ISendLoginLink,
} from "@monotonous/email";
import { logger } from "../lib/logger";

const queueName = "email";
const queue = new Queue(queueName);

const JobNames = {
  EMAIL_CONFIRMATION: "email_confirmation",
  INVITE_LINK: "invite_link",
  LOGIN_LINK: "login_link",
};

const jobs = {
  [JobNames.EMAIL_CONFIRMATION]: async (job: Job<ISendEmailConfirmation>) => {
    await EmailDispatcher.sendEmailConfirmation(job.data);
  },
  [JobNames.INVITE_LINK]: async (job: Job<ISendInviteLink>) => {
    await EmailDispatcher.sendInviteLink(job.data);
  },
  [JobNames.LOGIN_LINK]: async (job: Job<ISendLoginLink>) => {
    await EmailDispatcher.sendLoginLink(job.data);
  },
};

/**
 * @name initWorker
 * Initialize the worker so it begins to watch our redus queues for jobs to process.
 */
export function initWorker() {
  new Worker(queueName, async (job) => {
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
 * Queue up an email confirmation.
 */
export async function queueEmailConfirmation(data: ISendEmailConfirmation) {
  logger.debug({ emailName: JobNames.EMAIL_CONFIRMATION, data });
  await queue.add(JobNames.EMAIL_CONFIRMATION, data);
}
/**
 * @name queueInviteLink
 * Queue up a invite link email.
 */
export async function queueInviteLink(data: ISendInviteLink) {
  logger.debug({ emailName: JobNames.LOGIN_LINK, data });
  await queue.add(JobNames.LOGIN_LINK, data);
}

/**
 * @name queueLoginLink
 * Queue up a login link email.
 */
export async function queueLoginLink(data: ISendLoginLink) {
  logger.debug({ emailName: JobNames.LOGIN_LINK, data });
  await queue.add(JobNames.LOGIN_LINK, data);
}
