import { StateCreator } from "zustand";
import axios from "axios";

export interface StationType {
  boost: boolean;
  country: string;
  geo: [number, number];
  id: string;
  size: number;
  title: string;
  url: string;
}

export interface StationsState {
  stations: StationType[];
  setStations: (stations: []) => void;
  getStations: () => void;
}

export const useStationsState: StateCreator<StationsState> = (set) => ({
  stations: [],
  setStations: (stations) => set({ stations: stations }),
  getStations: async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/Simuratli/radioapi/master/db.json",
    );
    set({ stations: response.data.places });
  },
});
