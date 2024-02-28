import { StateCreator } from "zustand";

export interface StationType {
  boost: boolean;
  country: string;
  geo: [number, number];
  id: string;
  size: number;
  title: string;
  url: string;
  name: string;
  flag: string;
}

export interface SelectingState {
  selectedStation: StationType | null;
  selectStation: (station: StationType | null) => void;
}

export const useSelectState: StateCreator<SelectingState> = (set) => ({
  selectedStation: null,
  selectStation: (station) => set({ selectedStation: station }),
});
