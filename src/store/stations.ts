import { StateCreator } from "zustand";
import axios from "axios";
import { StationType } from "./select";

export interface StationsState {
  stations: StationType[];
  setStations: (stations: []) => void;
  getStations: () => void;
}

export const useStationsState: StateCreator<StationsState> = (set, get) => ({
  stations: [],
  setStations: (stations) => set({ stations: stations }),
  getStations: async () => {
    const response = await axios.get(
      "https://raw.githubusercontent.com/Simuratli/radioapi/master/db.json",
    );
    get().stations.length === 0 && set({ stations: response.data.places });
  },
});
