import * as constantsAct from "../constants/actionsTypes";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case constantsAct.GET_USER_TYPE_LIST:
      state.userTypeList = action.userTypeList;
      break;
    case constantsAct.LOG_IN:
      state.user = action.user;
      break;
    case constantsAct.REGISTER_USER:
      state.registerUser = action.registerUser;
      break;
    case constantsAct.GET_USER_LIST:
      state.getUserList = action.getUserList;
      break;
    case constantsAct.GET_USER_LIST_BY_PAGINATION:
      state.userListByPagination = action.userListByPagination;
      break;
    case constantsAct.GET_SEARCH_USER:
      state.searchUser = action.searchUser;
      break;
    case constantsAct.ACCOUNT_INFORMATION:
      state.accountInformation = action.accountInformation;
      break;
    case constantsAct.ADD_USER:
      state.addUser = action.addUser;
      break;
    case constantsAct.UPDATE_USER:
      state.updateUser = action.updateUser;
      break;
    case constantsAct.DELETE_USER:
      state.deleteUser = action.deleteUser;
      break;
    default:
      break;
  }
  return { ...state };
};

export default userReducer;
