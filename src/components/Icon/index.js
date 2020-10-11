import React from "react";
import PropTypes from "prop-types";
import {IconWrapper} from "./style";

function Icon({icon:IconComponent,color,width = 24,height = 24,opacity,...prop}) {
  return (
    <IconWrapper color={color} opacity={opacity} {...prop}>
      {IconComponent && <IconComponent width={width} height={height} />}
    </IconWrapper>
  );
}

Icon.propTypes = {
	icon: PropTypes.element,
	color: PropTypes.string,
	opacity: PropTypes.number,
	width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Icon;
