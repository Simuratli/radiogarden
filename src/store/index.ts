import { create } from "zustand";
import { useStationsState, StationsState } from "./stations";
import { useSelectState, SelectingState } from "./select";

export const useStore = create<StationsState & SelectingState>()((...a) => ({
  ...useStationsState(...a),
  ...useSelectState(...a),
}));
