import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialLink({ icon, bgColor, size = "30px", href, ...props }) {
	return (
		<Button
			size={size}
			shape="circle"
			bgColor={bgColor}
			onClick={() => href && window.open(href, "_blank")}
			{...props}
		>
			<FontAwesomeIcon
				icon={icon}
				style={{ fontSize: "16px",color:"white" }}
			></FontAwesomeIcon>
		</Button>
	);
}

SocialLink.propTypes = {
	icon: PropTypes.elementType,
	bgColor: PropTypes.string,
	size: PropTypes.string,
	href: PropTypes.string,
};

export default SocialLink;
