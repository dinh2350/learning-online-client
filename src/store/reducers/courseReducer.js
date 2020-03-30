import * as constantsAct from "../constants/actionsTypes";

const initialState = {
  test: "test"
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case constantsAct.GET_COURSE_LIST:
      console.log(action.courseList);
      state.courseList = action.courseList;
      break;
    case constantsAct.GET_CATALOG_LIST:
      console.log(action.catalogList);
      state.catalogList = action.catalogList;
      break;
    default:
      break;
  }
  return { ...state };
};

export default courseReducer;
