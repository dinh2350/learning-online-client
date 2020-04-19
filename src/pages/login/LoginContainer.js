import Login from "./Login";
import { connect } from "react-redux";
import {
  actLogInAPI,
  actCheckLogin,
  actLocation,
} from "../../store/actions/userActions";
const mapDispatchToProps = (dispatch) => {
  return {
    actLogInAPI: (user) => {
      dispatch(actLogInAPI(user));
    },
    actCheckLogin: (isCheck) => {
      dispatch(actCheckLogin(isCheck));
    },
    actLocation: (location) => {
      dispatch(actLocation(location));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    location: state.userReducer.location,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
