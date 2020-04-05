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
  };
};
export default connect(mapStateToProps, mapDispathToProps)(Home);
