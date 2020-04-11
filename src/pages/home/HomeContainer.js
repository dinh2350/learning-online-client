import Home from "./Home";
import { connect } from "react-redux";
import { actGetCatalogListAPI } from "./../../store/actions/courseActions";

const mapDispathToProps = (dispatch) => {
  return {
    actGetCatalogListAPI: (catalogName = "") => {
      dispatch(actGetCatalogListAPI(catalogName));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    catalogList: state.courseReducer.catalogList,
    courseListByBackEnd: state.courseReducer.courseListByBackEnd,
    courseListByDesign: state.courseReducer.courseListByDesign,
    courseListByDiDong: state.courseReducer.courseListByDiDong,
    courseListByFrontEnd: state.courseReducer.courseListByFrontEnd,
    courseListByFullStack: state.courseReducer.courseListByFullStack,
    courseListByTuDuy: state.courseReducer.courseListByTuDuy,
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Home);
