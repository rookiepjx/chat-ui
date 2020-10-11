import React from "react";
import PropTypes from "prop-types";
import {BadgeWrapper} from "./style";

function Badge({children,...prop}) {
  return (
    <BadgeWrapper {...prop}>
      {children}
    </BadgeWrapper>
  );
}

Badge.propTypes = {
  children: PropTypes.any
};

export default Badge;
