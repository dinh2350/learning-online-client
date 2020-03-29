import Dropdown from "./Dropdown";
import { connect } from "react-redux";
import {
  actisDropdown,
  actListDropHeader
} from "../../../../store/actions/isDropdownAction";
const mapDispatchToProps = dispatch => {
  return {
    isDropDown: () => {
      dispatch(actisDropdown());
    },
    isDropDownHeader: bool => {
      dispatch(actListDropHeader(bool));
    }
  };
};
const mapStateToProps = state => {
  return {
    isDropdown: state.isDropdown,
    isList: state.ListDrop
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
