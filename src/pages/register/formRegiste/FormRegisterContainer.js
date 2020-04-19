import FormRegister from "./FormRegister";
import {
  actRegisterUserAPI,
  actLocation,
} from "../../../store/actions/userActions";
import { connect } from "react-redux";
const mapDispatchToProps = (dispatch) => {
  return {
    actRegisterUserAPI: (user) => {
      dispatch(actRegisterUserAPI(user));
    },
    actLocation: (location) => {
      dispatch(actLocation(location));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    registerUser: state.userReducer.registerUser,
    registerUserErr: state.userReducer.registerUserErr,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FormRegister);
