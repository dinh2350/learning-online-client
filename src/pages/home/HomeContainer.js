import Home from "./Home";
import { connect } from "react-redux";
import { actGetCatalogListAPI } from "./../../store/actions/courseActions";

const mapDispathToProps = dispatch => {
  return {
    actGetCatalogListAPI: (catalogName = "") => {
      dispatch(actGetCatalogListAPI(catalogName));
    }
  };
};

export default connect(null, mapDispathToProps)(Home);
