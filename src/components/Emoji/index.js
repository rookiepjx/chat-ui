import React from "react";
import PropTypes from "prop-types";
import StyledEmoji from "./style";

function Emoji({children,label,...props}) {
  return (
    <StyledEmoji role="img" aria-label={label} {...props}>
      {children}
    </StyledEmoji>
  );
}

Emoji.propTypes = {
  children: PropTypes.any,
  label:PropTypes.string
};

export default Emoji;
