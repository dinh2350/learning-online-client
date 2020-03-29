import { combineReducers } from "redux";
import courseReducer from "./courseReducer";
import isDropdown from "./isDropdown";
import ListDrop from "./ListDrop";
import isSwitch from "./isSwitch";
import isSwitchInput from "./isSwitchInput";

const rootReducer = combineReducers({
  courseReducer,
  isDropdown,
  ListDrop,
  isSwitch,
  isSwitchInput
});

export default rootReducer;
