import { IS_SWITCH } from "../constants/actionsTypes";
const switchs = false;
const isSwitch = (state = switchs, action) => {
  switch (action.type) {
    case IS_SWITCH:
      return !state;

    default:
      return state;
  }
};
export default isSwitch;
