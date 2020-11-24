import React from "react";
import PropTypes from "prop-types";
import StyledFilter from "./style";
import Text from "../Text";
import { Filters, Actions } from "./style";

function Filter({ children, ...props }) {
	return <StyledFilter {...props}>{children}</StyledFilter>;
}

// Filter组件包含左侧选项组件和右侧行为组件
Filter.Filters = ({ children, label, ...props }) => (
	<Filters {...props}>
		<Text type="secondary">{label}:</Text>
		{children}
	</Filters>
);
Filter.Actions = ({ children, label, ...props }) => (
	<Actions {...props}>
		<Text>{label}</Text>
		{children}
	</Actions>
);

Filter.propTypes = {
	children: PropTypes.any,
};

export default Filter;
