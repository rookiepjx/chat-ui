---
to: src/components/<%= name %>/index.js
---

import React from "react";
import PropTypes from "prop-types";
import Styled<%= name %> from "./style";

function <%= name %>({children,...props}) {
  return (
    <Styled<%= name %> {...props}>
      {children}
    </Styled<%= name %>>
  );
}

<%= name %>.propTypes = {
  children: PropTypes.any
};

export default <%= name %>;
