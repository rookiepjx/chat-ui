import React from "react";
import PropTypes from "prop-types";
import StyledParagraph from "./style";

function Paragraph({children,ellipsis,...props}) {
  return (
    <StyledParagraph as="p" ellipsis={ellipsis} {...props}>
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  children: PropTypes.any,
  ellipsis:PropTypes.bool
};

export default Paragraph;
