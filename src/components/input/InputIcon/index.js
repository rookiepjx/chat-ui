import React from "react";
import PropTypes from "prop-types";
import StyledInputIcon from "./style";
import {InputUnderline} from "../InputText/style"

function InputIcon({children,placeholder,...props}) {
  return (
		<StyledInputIcon {...props}>
			{children}
			<InputUnderline placeholder={placeholder}/>
		</StyledInputIcon>
	);
}

InputIcon.propTypes = {
  children: PropTypes.any,
  icon:PropTypes.any
};

export default InputIcon;
