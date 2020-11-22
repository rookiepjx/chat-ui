---
to: src/components/<%= name %>/index.js
---

import React from "react";
import PropTypes from "prop-types";
import {Styled<%= name %>} from "./style";

function <%= name %>({children,...prop}) {
  return (
    <Styled<%= name %> {...prop}>
      {children}
    </Styled<%= name %>>
  );
}

<%= name %>.propTypes = {
  children: PropTypes.any
};

export default <%= name %>;
