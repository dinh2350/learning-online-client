import * as constantsAct from "../constants/actionsTypes";

const initialState = {};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case constantsAct.GET_COURSE_LIST:
      state.courseList = action.courseList;
      break;
    case constantsAct.GET_CATALOG_LIST:
      state.catalogList = action.catalogList;
      break;
    case constantsAct.GET_COURSE_LIST_BY_CATALOG:
      state.courseListByCatalog = action.courseListByCatalog;
      break;
    case constantsAct.GET_COURSE_LIST_BY_PAGINATION:
      state.courseListByPagination = action.courseListByPagination;
      break;
    default:
      break;
  }
  return { ...state };
};

export default courseReducer;
