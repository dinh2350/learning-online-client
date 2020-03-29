import { IS_SWITCH, IS_SWITCH_LIST } from "../constants/actionsTypes";
export const actIsSwitch = () => {
  return {
    type: IS_SWITCH
  };
};
export const actIsSwitchList = str => {
  return {
    type: IS_SWITCH_LIST,
    str
  };
};
