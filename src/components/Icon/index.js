import React from "react";
import PropTypes from "prop-types";
import StyledIcon from "./style";

function Icon({icon:IconComponent,color,width = 24,height = 24,opacity,...prop}) {
  return (
    <StyledIcon color={color} opacity={opacity} {...prop}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </StyledIcon>
  );
}

Icon.propTypes = {
	icon: PropTypes.any,
	color: PropTypes.string,
	opacity: PropTypes.number,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Icon;
