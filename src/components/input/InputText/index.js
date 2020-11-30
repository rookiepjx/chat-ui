import React from "react";
import PropTypes from "prop-types";
import StyledInputText, { InputUnderline } from "./style";
import LabelContainer from "components/LabelContainer";

function InputText({ children, label, placeholder = "请输入内容", ...props }) {
	const input = <InputUnderline type="text" placeholder={placeholder} />;
	return (
		<StyledInputText {...props}>
			{label ? <LabelContainer label={label}>{input}</LabelContainer> : input}
		</StyledInputText>
	);
}

InputText.propTypes = {
  children: PropTypes.any,
  label:PropTypes.string
};

export default InputText;
