import CheckLogin from "./CheckLogin";
import { connect } from "react-redux";
import { actCheckLogin, actLogInAPI } from "../../../store/actions/userActions";
const mapDispatchToProps = (dispatch) => {
  return {
    actCheckLogin: (isCheck) => {
      dispatch(actCheckLogin(isCheck));
    },
    actLogInAPI: (user) => {
      dispatch(actLogInAPI(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(CheckLogin);
