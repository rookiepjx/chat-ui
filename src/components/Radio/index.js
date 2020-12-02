import React from "react";
import PropTypes from "prop-types";
import StyledRadio, { Circle, RadioButton,StyledRadioGroup } from "./style";
import LabelContainer from "components/LabelContainer"

// 思路：1.通过label标签实现点击文字触发radio
// 2.隐藏原生radio(因为没有缩放动画)
// 3.通过伪元素实现radio选项

function Radio({ children, name, ...props }) {
	return (
		<StyledRadio {...props}>
			{children}
			<RadioButton name={name} />
			<Circle />
		</StyledRadio>
	);
}

function RadioGroup({children,label,...props}){
  return (
		<LabelContainer label={label}>
			<StyledRadioGroup {...props}>{children}</StyledRadioGroup>
		</LabelContainer>
	);
}

Radio.Group = RadioGroup

Radio.propTypes = {
	children: PropTypes.any,
	name: PropTypes.string,
};

RadioGroup.propTypes = {
	label: PropTypes.string,
	children: PropTypes.any,
};

export default Radio;
