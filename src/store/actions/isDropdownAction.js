import { SWITCH_STATE, SWITCH_STATE_HEADER } from "../constants/actionsTypes";
export const actisDropdown = () => {
  return { type: SWITCH_STATE };
};

export const actListDropHeader = bool => {
  return { type: SWITCH_STATE_HEADER, bool };
};
