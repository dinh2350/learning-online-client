import ListTrending from "./ListTrending";
import { connect } from "react-redux";
import { actGetCourseListByCatalogAPI } from "./../../../store/actions/courseActions";
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    actGetCourseListByCatalogAPI: (catalogCode = "TuDuy") => {
      dispatch(actGetCourseListByCatalogAPI(catalogCode));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTrending);
