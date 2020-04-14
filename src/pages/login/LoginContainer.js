import Login from "./Login";
import { connect } from "react-redux";
import { actLogInAPI } from "../../store/actions/userActions";
const mapDispatchToProps = (dispatch) => {
  return {
    actLogInAPI: (user) => {
      dispatch(actLogInAPI(user));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
