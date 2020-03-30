import Header from "./Header";
import { connect } from "react-redux";
import { actGetCourseListByPaginationAPI } from "./../../store/actions/courseActions";
const mapDispatchToProps = dispatch => {
  return {
    actGetCourseListByPaginationAPI: (
      courseName = "",
      page = "1",
      pageSize = "10"
    ) => {
      dispatch(actGetCourseListByPaginationAPI(courseName, page, pageSize));
    }
  };
};
export default connect(null, mapDispatchToProps)(Header);
