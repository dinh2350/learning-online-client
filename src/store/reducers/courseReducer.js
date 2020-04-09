import * as constantsAct from "../constants/actionsTypes";

const initialState = {
  test: "test",
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case constantsAct.GET_COURSE_LIST_BY_CATALOG:
      state.courseListByCatalog = action.courseListByCatalog;
      break;
    case constantsAct.GET_CATALOG_LIST:
      state.catalogList = action.catalogList;
      break;
    case constantsAct.GET_INFOR_COURSE:
      state.inforCourseCode = action.inforCourseCode;
    case constantsAct.GET_COURSE_LIST_BY_CATALOG:
      state.courseListByCatalog = action.courseListByCatalog;
      break;
    case constantsAct.GET_COURSE_LIST_BY_PAGINATION:
      state.courseListByPagination = action.courseListByPagination;
      break;
    case constantsAct.GET_COURSE_INFORMATION:
      state.courseInformation = action.courseInformation;
      break;
    case constantsAct.GET_STUDENT_INFORMATION_OF_COURSE:
      state.studentInformationOfCourse = action.studentInformationOfCourse;
      break;
    default:
      break;
  }
  return { ...state };
};

export default courseReducer;
