import * as constantsAct from "../constants/actionsTypes";

const initialState = {
  test: "test"
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case constantsAct.GET_COURSE_LIST:
      state.courseList = action.courseList;
      break;
    case constantsAct.GET_CATALOG_LIST:
      state.catalogList = action.catalogList;
      break;
    default:
      break;
  }
  return { ...state };
};

export default courseReducer;
