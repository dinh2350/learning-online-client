import Header from "./Header";
import { connect } from "react-redux";
import {
  actGetCourseListByPaginationAPI,
  actGetCourseInformationAPI,
  actGetStudentInformationOfCourseAPI
} from "./../../store/actions/courseActions";
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
    }
  };
};
export default connect(null, mapDispatchToProps)(Header);
