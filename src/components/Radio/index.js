import React from "react";
import PropTypes from "prop-types";
import StyledRadio from "./style";

function Radio({children,...props}) {
  return (
    <StyledRadio {...props}>
      {children}
    </StyledRadio>
  );
}

Radio.propTypes = {
  children: PropTypes.any
};

export default Radio;
