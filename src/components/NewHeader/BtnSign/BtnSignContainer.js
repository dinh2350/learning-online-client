import BtnSign from "./BtnSign";
import { connect } from "react-redux";
import { actCheckLogin } from "../../../store/actions/userActions";
const mapStateToProps = (state) => {
  return {
    checkLogin: state.userReducer.checkLogin,
    user: state.userReducer.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    actCheckLogin: (ischeck) => {
      dispatch(actCheckLogin(ischeck));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BtnSign);
