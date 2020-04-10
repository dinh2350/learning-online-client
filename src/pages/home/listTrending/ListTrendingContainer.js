import ListTrending from "./ListTrending";
import { connect } from "react-redux";
import { actGetCourseListByCatalogAPI } from "./../../../store/actions/courseActions";
const mapStateToProps = (state) => {
  return {
    courseListByBackEnd: state.courseReducer.courseListByBackEnd,
    courseListByDesign: state.courseReducer.courseListByDesign,
    courseListByDiDong: state.courseReducer.courseListByDiDong,
    courseListByFrontEnd: state.courseReducer.courseListByFrontEnd,
    courseListByFullStack: state.courseReducer.courseListByFullStack,
    courseListByTuDuy: state.courseReducer.courseListByTuDuy,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actGetCourseListByCatalogAPI: (catalogCode = "TuDuy") => {
      dispatch(actGetCourseListByCatalogAPI(catalogCode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTrending);
