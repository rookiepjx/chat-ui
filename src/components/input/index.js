import React from "react";
import PropTypes from "prop-types";
import {inputWrapper} from "./style";

function input({children,...prop}) {
  return (
    <inputWrapper {...prop}>
      {children}
    </inputWrapper>
  );
}

input.propTypes = {
  children: PropTypes.any
};

export default input;
