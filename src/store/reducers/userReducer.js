import * as constantsAct from "../constants/actionsTypes";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constantsAct.GET_USER_TYPE_LIST:
      state.userTypeList = action.userTypeList;
      break;
    default:
      break;
  }
  return { ...state };
};

export default userReducer;
