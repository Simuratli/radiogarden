import { create } from "zustand";
import { useStationsState, StationsState } from "./stations";
import { useSelectState, SelectingState } from "./select";
import { useSelectCircle, CircleState } from "./circle";

export const useStore = create<StationsState & SelectingState & CircleState>()(
  (...a) => ({
    ...useStationsState(...a),
    ...useSelectState(...a),
    ...useSelectCircle(...a),
  }),
);
