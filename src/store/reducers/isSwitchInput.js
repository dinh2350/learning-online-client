import { IS_SWITCH_LIST } from "../constants/actionsTypes";
const list = "Learning";
const isSiwtchList = (state = list, action) => {
  switch (action.type) {
    case IS_SWITCH_LIST:
      return action.str;

    default:
      return state;
  }
};
export default isSiwtchList;
