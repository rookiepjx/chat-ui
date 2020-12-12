import React from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Nav, SideBar, Content, Drawer } from "./style";
import Navbar from "components/Navbar";
import MessageList from "components/MessageList";
import Conversation from "components/Conversation";
import Profile from "components/Profile"

function ChatApp({children,...props}) {
  return (
    <StyledChatApp {...props}>
      <Nav>
        <Navbar/>
      </Nav>
      <SideBar>
        <MessageList/>
      </SideBar>
      <Content>
        <Conversation/>
      </Content>
      <Drawer>
        <Profile/>
      </Drawer>
    </StyledChatApp>
  );
}

ChatApp.propTypes = {
  children: PropTypes.any
};

export default ChatApp;
