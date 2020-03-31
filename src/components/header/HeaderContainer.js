import Header from "./Header";
import { connect } from "react-redux";
import {
  actGetCourseListByPaginationAPI,
  actGetCourseInformationAPI,
  actGetStudentInformationOfCourseAPI,
  actCreateCourseAPI
} from "./../../store/actions/courseActions";
import {
  actGetUserTypeListAPI,
  actLogInAPI,
  actRegisterUserAPI,
  actGetUserListAPI,
  actGetUserListByPaginationAPI,
  actGetSearchUserAPI,
  actAccountInformationAPI,
  actAddUserAPI
} from "../../store/actions/userActions";
const mapDispatchToProps = dispatch => {
  return {
    actGetCourseListByPaginationAPI: (
      courseName = "",
      page = "1",
      pageSize = "10"
    ) => {
      dispatch(actGetCourseListByPaginationAPI(courseName, page, pageSize));
    },
    actGetCourseInformationAPI: (courseCode = "Backend_01") => {
      dispatch(actGetCourseInformationAPI(courseCode));
    },
    actGetStudentInformationOfCourseAPI: (courseCode = "8957893753") => {
      dispatch(actGetStudentInformationOfCourseAPI(courseCode));
    },
    actCreateCourseAPI: course => {
      dispatch(actCreateCourseAPI(course));
    },
    actGetUserTypeListAPI: () => dispatch(actGetUserTypeListAPI()),
    actLogInAPI: user => dispatch(actLogInAPI(user)),
    actRegisterUserAPI: user => dispatch(actRegisterUserAPI(user)),
    actGetUserListAPI: keyWork => dispatch(actGetUserListAPI(keyWork)),
    actGetUserListByPaginationAPI: (
      keyWork = "",
      page = "1",
      pageSize = "10"
    ) => dispatch(actGetUserListByPaginationAPI(keyWork, page, pageSize)),
    actGetSearchUserAPI: (keyWork = "") =>
      dispatch(actGetSearchUserAPI(keyWork)),
    actAccountInformationAPI: user => dispatch(actAccountInformationAPI(user)),
    actAddUserAPI: user => dispatch(actAddUserAPI(user))
  };
};
export default connect(null, mapDispatchToProps)(Header);
