import React from "react";
import PropTypes from "prop-types";
import StyledPopover, { Content, Triangle, Target } from "./style";
import { useState } from "react";

function Popover({
	children,
	content,
	offset = {},
	onVisible,
	onHide,
	...props
}) {
	const [visible, setVisible] = useState(false);
	const handleClick = () => {
		if (!visible) {
			setVisible(true);
			// 设置可选回调函数
			onVisible && onVisible();
		} else {
			setVisible(false);
			onHide && onHide();
		}
	};
	return (
		<StyledPopover onClick={handleClick} {...props}>
			<Content visible={visible} offset={offset}>
				{content}
			</Content>
			<Triangle visible={visible} offset={offset} />
			<Target>{children}</Target>
		</StyledPopover>
	);
}

Popover.propTypes = {
  children: PropTypes.any,
  onVisible:PropTypes.func,
  onHide:PropTypes.func,
  content:PropTypes.any,
  offset:PropTypes.shape({x:PropTypes.string,y:PropTypes.string})
};

export default Popover;
