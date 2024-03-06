import { create } from "zustand";
import { useStationsState, StationsState } from "./stations";
import { useSelectState, SelectingState } from "./select";
import { useLoading, LoadingState } from "./loading";
import { MenuState, useMenuState } from "./menu";
import { useLocation, LocationState } from "./location";
import { MainLoadingState, useMainLoading } from "./mainLoader";

export const useStore = create<
  StationsState &
    SelectingState &
    LoadingState &
    MenuState &
    LocationState &
    MainLoadingState
>()((...a) => ({
  ...useStationsState(...a),
  ...useSelectState(...a),
  ...useLoading(...a),
  ...useMenuState(...a),
  ...useLocation(...a),
  ...useMainLoading(...a),
}));
