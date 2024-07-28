import { atom } from "recoil";
import { INavItem } from "../types/interfaces";

export const navHoverItemState = atom<INavItem | null>({
  key: "modal-state",
  default: null,
});
