import React from "react";
import PropTypes from "prop-types";
import StyledText from "./style";

function Text({ children, type = "primary", size = "normal", bold, ...props }) {
	return <StyledText type={type} size={size} bold={bold} {...props}>{children}</StyledText>;
}

Text.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(["primary", "secondary", "danger"]),
	size: PropTypes.oneOf([
		"xxsmall",
		"xsmall",
		"small",
		"normal",
		"medium",
		"large",
		"xlarge",
		"xxlarge"]
	),
	bold: PropTypes.bool,
};

export default Text;
