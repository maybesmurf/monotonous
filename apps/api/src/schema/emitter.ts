/* eslint-disable @typescript-eslint/no-var-requires */
const redis = require('mqemitter-redis');

export const emitter = redis({
  host: '127.0.0.1',
  port: 6379,
});
