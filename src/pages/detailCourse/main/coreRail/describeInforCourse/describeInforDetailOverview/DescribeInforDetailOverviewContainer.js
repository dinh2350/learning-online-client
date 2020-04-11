import DescribeInforDetailOverview from "./DescribeInforDetailOverview";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    inforCourseCode: state.courseReducer.inforCourseCode,

    courseListByCatalog: state.courseReducer.courseListByCatalog,
  };
};
export default connect(mapStateToProps, null)(DescribeInforDetailOverview);
