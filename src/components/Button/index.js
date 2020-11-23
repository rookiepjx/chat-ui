import React from "react";
import PropTypes from "prop-types";
import StyledButton from "./style";

function Button({children,bgColor="#fff",shape="rect",type="default",size="30px",...props}) {
  return (
    <StyledButton type={type} shape={shape} size={size} bgColor={bgColor}  {...props}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  shape:PropTypes.oneOf("rect","circle"),
  type:PropTypes.oneOf(["default","primary","success","danger","info","warn"]),
  size:PropTypes.string,
  bgColor:PropTypes.string
};

export default Button;
