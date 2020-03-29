import SearchInput from "./SearchInput";
import { connect } from "react-redux";
const mapStateToProps = state => {
  return {
    isSwitchInput: state.isSwitchInput
  };
};
export default connect(mapStateToProps, null)(SearchInput);
