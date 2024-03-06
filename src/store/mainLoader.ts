import { StateCreator } from "zustand";

export interface MainLoadingState {
  mainLoading: boolean;
  setMainLoading: (loading: boolean) => void;
}

export const useMainLoading: StateCreator<MainLoadingState> = (set) => ({
  mainLoading: true,
  setMainLoading: (load) => set({ mainLoading: load }),
});
