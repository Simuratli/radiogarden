import { StateCreator } from "zustand";

export interface LoadingState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useLoading: StateCreator<LoadingState> = (set) => ({
  loading: false,
  setLoading: (load) => set({ loading: load }),
});
