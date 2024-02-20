import { create } from "zustand";
import { useStationsState, StationsState } from "./stations";

export const useStore = create<StationsState>()((...a) => ({
  ...useStationsState(...a),
}));
