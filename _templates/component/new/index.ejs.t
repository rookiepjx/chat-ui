---
to: src/components/<%= name %>/index.js
---

import React from "react";
import PropTypes from "prop-types";
import {<%= name %>Wrapper} from "./style";

function <%= name %>({children,...prop}) {
  return (
    <<%= name %>Wrapper {...prop}>
      {children}
    </<%= name %>Wrapper>
  );
}

<%= name %>.propTypes = {
  children: PropTypes.any
};

export default <%= name %>;
