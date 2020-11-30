import React from "react";
import PropTypes from "prop-types";
import StyledSeparator from "./style";

function Separator({children,...props}) {
  return (
    <StyledSeparator {...props}>
      {children}
    </StyledSeparator>
  );
}

Separator.propTypes = {
  children: PropTypes.any
};

export default Separator;
