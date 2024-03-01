import { create } from "zustand";
import { useStationsState, StationsState } from "./stations";
import { useSelectState, SelectingState } from "./select";
import { useLoading, LoadingState } from "./loading";

export const useStore = create<StationsState & SelectingState & LoadingState>()(
  (...a) => ({
    ...useStationsState(...a),
    ...useSelectState(...a),
    ...useLoading(...a),
  }),
);
