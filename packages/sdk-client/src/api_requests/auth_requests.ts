import { http } from '../lib/http';

/**
 * @name preRegister
 * Take some initial user information which in turn triggers
 * an email confirmation to be sent to them.
 */
export async function preRegister(params: {
  firstName: string;
  lastName: string;
  email: string;
}) {
  return http.post<{ success: boolean }>('/pre-registration', params);
}

/**
 * @name register
 * Confirms email address and unlocks the user's account.
 * This is where we should collect additional information if we need it.
 */
export async function register(params: { token: string; email: string }) {
  return http.post<{ success: boolean }>('/register', params);
}

/**
 * @name preLogin
 * Requests a passwordless login email be sent to the user.
 */
export async function preLogin(email: string) {
  return http.post('/pre-login', { email });
}

/**
 * @name login
 * Requests a passwordless login email be sent to the user.
 */
export async function login(token: string) {
  return http.post<{ userId: string; firstName: string; lastName: string }>(
    '/login',
    { token }
  );
}

/**
 * @name logout
 * Logs the user out.
 */
export async function logout() {
  return http.delete('/logout');
}
