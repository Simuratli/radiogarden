import { StateCreator } from "zustand";
import axios from "axios";

export interface CurrentLocationTypes {
  cacheTimestamp: number;
  cached: boolean;
  city: string;
  continent: string;
  country: string;
  countryCode: string;
  currency: string;
  ip: string;
  isp: string;
  lat: number;
  lon: number;
  mobile: string;
  org: string;
  proxy: string;
  regionName: string;
  reverse: string;
  status: string;
  timezone: string;
  zip: string;
}

export interface LocationState {
  currentLocation: CurrentLocationTypes | null;
  setCurrentLocation: (e: CurrentLocationTypes) => void;
  getCurrentLocation: () => void;
}

export const useLocation: StateCreator<LocationState> = (set) => ({
  currentLocation: null,
  setCurrentLocation: (e) => set({ currentLocation: e }),
  getCurrentLocation: async () => {
    const response = await axios.get("https://api.techniknews.net/ipgeo/");
    set({ currentLocation: response.data });
  },
});
