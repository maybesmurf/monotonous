import { createSigner, createVerifier } from 'fast-jwt';
import { config } from '@monotonous/conf';

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
