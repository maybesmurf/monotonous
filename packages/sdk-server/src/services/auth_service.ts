import { createSigner, createVerifier } from "fast-jwt";
import { config } from "@monotonous/conf";
import { redis } from "../lib/redis_client";

interface Claims {
  userId: string;
}

const sign = createSigner({ key: config.auth.secret });
const verify = createVerifier({ key: config.auth.secret, cache: 1000 });

/**
 * @name signJwt
 * Sign a jwt with the necessary claims.
 */
export async function signJwt(userId: string): Promise<string> {
  return sign({ userId });
}

/**
 * @name verifyJwt
 * Verify jwt and return the claims.
 */
export async function verifyJwt(jwt?: string): Promise<Claims | undefined> {
  if (!jwt) {
    return undefined;
  }

  return verify(jwt);
}

/**
 * @name assignOtp
 * Assign a unique 6 digit code that should be input
 * by the user in order to complete login.
 */
export async function assignOtp(email: string): Promise<string> {
  try {
    const code = Math.floor(100000 + Math.random() * 900000).toString(); // 6 digit number
    const existing = await redis.get(email);

    if (existing) {
      return assignOtp(email);
    }

    await redis.set(
      JSON.stringify({ code, attemptsLeft: 3 }),
      email,
      "EX",
      config.auth.loginTTL
    );
    return code;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
}

/**
 * @name verifyOtp
 * Verify a given one time password for a user. If its incorrect,
 * decrement it and update the value in redis.
 */
export async function verifyOtp(email: string, code: string): Promise<boolean> {
  const record = await redis.get(email);

  if (!record) {
    throw new Error("No login code for that user.");
  }

  const attempt = JSON.parse(record) as { code: string; attemptsLeft: number };

  if (attempt.code !== code) {
    const attemptsLeft = attempt.attemptsLeft - 1;

    await redis.set(
      JSON.stringify({ code, attemptsLeft }),
      email,
      "EX",
      config.auth.loginTTL
    );

    throw new Error(
      `Incorrect code. You have ${attemptsLeft} attempts remaining.`
    );
  }

  return true;
}
