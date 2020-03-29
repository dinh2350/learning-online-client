import { SWITCH_STATE } from "../constants/actionsTypes";
const DropDown = false;
const isDropDown = (state = DropDown, action) => {
  switch (action.type) {
    case SWITCH_STATE:
      return !state;
    default:
      return state;
  }
};
export default isDropDown;
