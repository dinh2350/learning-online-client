import ListCourse from "./ListCourse";
import { connect } from "react-redux";
import { actGetCourseListByCatalogAPI } from "../../../store/actions/courseActions";
const mapDispatchToProps = (dispatch) => {
  return {
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

export default connect(mapStateToProps, mapDispatchToProps)(ListCourse);
