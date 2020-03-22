import Home from "./Home";
import { connect } from "react-redux";
import {
  actGetCatalogListAPI,
  actGetCourseListAPI
} from "./../../store/actions/courseActions";

const mapDispathToProps = dispatch => {
  return {
    actGetCatalogListAPI: (catalogName = "") => {
      dispatch(actGetCatalogListAPI(catalogName));
    },
    actGetCourseListAPI: (courseName = "") => {
      dispatch(actGetCourseListAPI((courseName = "")));
    }
  };
};

export default connect(null, mapDispathToProps)(Home);
