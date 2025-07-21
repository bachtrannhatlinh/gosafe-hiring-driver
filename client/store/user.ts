import { create } from 'zustand';

interface UserState {
  zaloId: string;
  accessToken: string;
  setUser: (zaloId: string, token: string) => void;
}

export const useUserStore = create<UserState>((set) => ({
  zaloId: '',
  accessToken: '',
  setUser: (zaloId, accessToken) => set({ zaloId, accessToken }),
}));
