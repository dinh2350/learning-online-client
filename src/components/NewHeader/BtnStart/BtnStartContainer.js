import BtnStart from "./BtnStart";
import { connect } from "react-redux";
import { actCheckLogin } from "../../../store/actions/userActions";
const mapStateToProps = (state) => {
  return {
    checkLogin: state.userReducer.checkLogin,
  };
};
export default connect(mapStateToProps, null)(BtnStart);
