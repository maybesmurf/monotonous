import create from 'zustand';
import { login, logout } from '../api_requests/auth_requests';

type SessionStore = {
  userId: string | null;
  firstName: string | null;
  lastName: string | null;
  login(token: string): void;
  logout(): void;
};

const initialState = {
  userId: null,
  firstName: null,
  lastName: null,
};

export const useSessionStore = create<SessionStore>(set => ({
  ...initialState,

  async login(token) {
    const user = await login(token);
    set(user);
  },

  async logout() {
    await logout();
    set({ ...initialState });
  },
}));
