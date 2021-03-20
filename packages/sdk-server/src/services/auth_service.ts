import { createSigner, createVerifier } from "fast-jwt";
import { config } from "@monotonous/conf";
import { redis } from "../lib/redis_client";

interface Claims {
  userId: string;
}

const sign = createSigner({ key: config.auth.secret });
const verify = createVerifier({ key: config.auth.secret, cache: 1000 });

export async function signJwt(userId: string): Promise<string> {
  return sign({ userId });
}

export async function verifyJwt(jwt: string): Promise<Claims> {
  return verify(jwt);
}

export async function assignOtp(userId: string) {
  const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit number
  const existing = await redis.get(code);

  if (existing) {
    return assignOtp(userId);
  }

  return redis.set(code, userId, "EX", config.auth.loginTTL);
}
