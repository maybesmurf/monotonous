import Redis from 'ioredis';
import { config } from '@monotonous/conf';

export const redis = new Redis({
  host: config.redis.host,
  port: config.redis.port,
});
