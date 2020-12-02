import React from "react";
import PropTypes from "prop-types";
import StyledCheckboxSwitch,{Checkbox,Slider} from "./style";

function CheckboxSwitch({children,...props}) {
  return (
    <StyledCheckboxSwitch {...props}>
      <Checkbox/>
      <Slider/>
    </StyledCheckboxSwitch>
  );
}

CheckboxSwitch.propTypes = {
  children: PropTypes.any
};

export default CheckboxSwitch;
