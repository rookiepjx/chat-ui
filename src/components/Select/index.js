import React from "react";
import PropTypes from "prop-types";
import StyledSelect from "./style";
import LabelContainer from "components/LabelContainer"

function Select({children,label,type,...props}) {
  const select = (
		<StyledSelect type={type} {...props}>
			{children}
		</StyledSelect>
	);
  return label ? (
		<LabelContainer label={ label }>{select}</LabelContainer>
	) : (
		select
	);
}

Select.propTypes = {
  children: PropTypes.any,
  type:PropTypes.oneOf(["form"])
};

export default Select;
