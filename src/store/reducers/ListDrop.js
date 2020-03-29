import {
  SWITCH_STATE_LIST,
  SWITCH_STATE_HEADER
} from "../constants/actionsTypes";
const ListDrop = false;
const isListDrop = (state = ListDrop, action) => {
  switch (action.type) {
    case SWITCH_STATE_HEADER:
      return action.bool;
    default:
      return state;
  }
};
export default isListDrop;
