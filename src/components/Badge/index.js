import React from "react";
import PropTypes from "prop-types";
import { StyledBadge,Count } from "./style";

function Badge({
	children,
	count = 0,
	show = false,
	showZero = true,
  bgc = "#F34848",
  size = "normal",
	...prop
}) {
	return (
		<StyledBadge
			variant={children ? "dot" : "default"}
			count={count}
			show={show}
			showZero={showZero}
      bgc={bgc}
      size={size}
			{...prop}
		>
			{children || <Count>{count}</Count>}
		</StyledBadge>
	);
}

Badge.propTypes = {
  count:PropTypes.number,
  show:PropTypes.bool,
  showZero:PropTypes.bool,
  bgc:PropTypes.string,
  size:PropTypes.oneOf(["normal","mini","large"]),
	children: PropTypes.any,
};

export default Badge;
