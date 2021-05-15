import { FastifyRequest, FastifyReply } from 'fastify';

export type CustomContext = {
  request: FastifyRequest;
  reply: FastifyReply;
};
