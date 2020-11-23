import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "./style";

function Select({children,...props}) {
  return (
    <StyledSelect {...props}>
      {children}
    </StyledSelect>
  );
}

Select.propTypes = {
  children: PropTypes.any
};

export default Select;
