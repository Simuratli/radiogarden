import { StateCreator } from "zustand";

export interface CircleType {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
}

export interface CircleState {
  circle: CircleType;
  setCirclePosition: (circle: CircleType) => void;
}

export const useSelectCircle: StateCreator<CircleState> = (set) => ({
  circle: {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
    x: 0,
    y: 0,
  },
  setCirclePosition: (circle) => set({ circle: circle }),
});
