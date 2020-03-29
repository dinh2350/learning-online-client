import Switch from "./Switch";
import { connect } from "react-redux";
import {
  actIsSwitch,
  actIsSwitchList
} from "../../../../store/actions/isStateAction";

const mapDispatchToProps = dispatch => {
  return {
    actIsSwitch: () => {
      dispatch(actIsSwitch());
    },
    actIsSwitchList: str => {
      dispatch(actIsSwitchList(str));
    }
  };
};

const mapStateToProps = state => {
  return {
    isSwitch: state.isSwitch,
    isSwitchInput: state.isSwitchInput
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Switch);
