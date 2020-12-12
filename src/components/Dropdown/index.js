import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledDropdown, { DropdownContainer } from "./style";

function Dropdown({ children, align = "left", content, ...props }) {
	const [visible, setVisible] = useState(false);
	return (
		<StyledDropdown onClick={() => setVisible(!visible)} {...props}>
			{children}
			{content && (
				<DropdownContainer visible={visible} align={align}>
					{content}
				</DropdownContainer>
			)}
		</StyledDropdown>
	);
}

Dropdown.propTypes = {
	children: PropTypes.any,
	content: PropTypes.any,
	align: PropTypes.oneOf(["left", "right"]),
};

export default Dropdown;
