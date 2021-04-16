import create from "zustand";

type State = {
  loggedIn: boolean;
  id?: string;
  firstName?: string;
  lastName?: string;
};

type Actions = {
  setUser(user: { id: string; firstName: string; lastName: string }): void;
  resetUser(): void;
};

const initialState = {
  loggedIn: false,
  id: undefined,
  firstName: undefined,
  lastName: undefined,
};

export const useAuth = create<State & Actions>((set) => ({
  ...initialState,

  setUser(user) {
    set({ loggedIn: true, ...user });
  },

  resetUser() {
    set({ ...initialState });
  },
}));
