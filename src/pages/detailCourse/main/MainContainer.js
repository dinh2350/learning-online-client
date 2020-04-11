import Main from "./Main";
import { actGetCourseListByCatalogAPI } from "../../../store/actions/courseActions";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    actGetCourseListByCatalogAPI: (catalogCode = "") => {
      dispatch(actGetCourseListByCatalogAPI(catalogCode));
    },
  };
};
export default connect(null, mapDispatchToProps)(Main);
