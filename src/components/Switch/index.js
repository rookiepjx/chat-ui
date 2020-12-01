import React from "react";
import PropTypes from "prop-types";
import StyledSwitch, { SwitchButton } from "./style";
import { useState } from "react";

function Switch({ children,active, ...props }) {
  const [open, setOpen] = useState(active)
	return (
		<StyledSwitch onClick={() => setOpen(!open)} active={open} {...props}>
			<SwitchButton active={open} />
		</StyledSwitch>
	);
}

Switch.propTypes = {
	children: PropTypes.any,
};

export default Switch;
