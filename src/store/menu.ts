import { StateCreator } from "zustand";

export enum MenuEnum {
  COUNTRIES = "COUNTRIES",
  DISCOVER = "DISCOVER",
  ABOUT = "ABOUT",
}
export interface MenuState {
  open: boolean;
  setOpen: (e: boolean) => void;
  current: MenuEnum;
  setCurrent: (e: MenuEnum) => void;
}

export const useMenuState: StateCreator<MenuState> = (set) => ({
  open: false,
  setOpen: (e) => set({ open: e }),
  setCurrent: (e) => set({ current: e }),
  current: MenuEnum.COUNTRIES,
});
