import CoreRail from "./CoreRail";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    inforCourseCode: state.courseReducer.inforCourseCode,
  };
};
export default connect(mapStateToProps, null)(CoreRail);
