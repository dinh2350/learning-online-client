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
  };
};

const mapStateToProps = (state) => {
  return {
    inforCourseCode: state.courseReducer.inforCourseCode,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailCourse);
