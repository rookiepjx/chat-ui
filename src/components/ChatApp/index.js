import React from "react";
import PropTypes from "prop-types";
import StyledChatApp, { Nav, SideBar, Content, Drawer } from "./style";
import Navbar from "components/Navbar";
import MessageList from "components/MessageList";
import ContactList from "components/ContactList";
import FileList from "components/FileList";
import NoteList from "components/NoteList";
import EditProfile from "components/EditProfile";
import Conversation from "components/Conversation";
import Profile from "components/Profile";
import { Route } from "react-router-dom";

function ChatApp({ children, ...props }) {
	return (
		<StyledChatApp {...props}>
			<Nav>
				<Navbar />
			</Nav>
			<SideBar>
				<Route exact path="/">
					<MessageList />
				</Route>
				<Route exact path="/contacts">
					<ContactList />
				</Route>
				<Route exact path="/files">
					<FileList />
				</Route>
				<Route exact path="/notes">
					<NoteList />
				</Route>
				<Route exact path="/setting">
					<EditProfile />
				</Route>
			</SideBar>

			<Content>
				<Conversation />
			</Content>

			<Drawer>
				<Profile />
			</Drawer>
		</StyledChatApp>
	);
}

ChatApp.propTypes = {
	children: PropTypes.any,
};

export default ChatApp;
