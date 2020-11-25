import React from "react";
import PropTypes from "prop-types";
import StyledMessageList from "./style";

function MessageList({children,...props}) {
  return (
    <StyledMessageList {...props}>
      {children}
    </StyledMessageList>
  );
}

MessageList.propTypes = {
  children: PropTypes.any
};

export default MessageList;
