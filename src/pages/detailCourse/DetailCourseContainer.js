import DetailCourse from "./DetailCourse";
import {
  actGetInforCourse,
  actGetCourseListByCatalogAPI,
} from "../../store/actions/courseActions";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    actGetInforCourse: (CourseCode = "Backend_01") => {
      dispatch(actGetInforCourse(CourseCode));
    },
    actGetCourseListByCatalogAPI: (catalogCode = "") => {
      dispatch(actGetCourseListByCatalogAPI(catalogCode));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    courseListByCatalog: state.courseReducer.courseListByCatalog,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse);
