import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
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
import Setting from "components/Setting";
import BlockedList from "components/BlockedList";
import VideoCall from "components/VideoCall";

function ChatApp({ children, ...props }) {
	const [showDrawer, setShowDrawer] = useState(false);
	const [showVideoCall, setShowVideoCall] = useState(false);
	return (
		<StyledChatApp {...props}>
			<Nav>
				<Navbar />
			</Nav>
			<SideBar>
				<Switch>
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
					<Route path="/setting">
						<EditProfile />
					</Route>
				</Switch>
			</SideBar>

			<Content>
				{showVideoCall && (
					<VideoCall onHangOff={() => setShowVideoCall(false)} />
				)}
				<Switch>
					<Route exact path="/setting">
						<Setting />
					</Route>
					<Route path="/setting/blocked">
						<BlockedList />
					</Route>
					<Route path="/">
						<Conversation
							onAvatarClick={() => setShowDrawer(true)}
							onVideoClick={() => setShowVideoCall(true)}
						/>
					</Route>
				</Switch>
			</Content>

			<Drawer show={showDrawer}>
				<Profile showClose onCloseClick={() => setShowDrawer(false)} />
			</Drawer>
		</StyledChatApp>
	);
}

ChatApp.propTypes = {
	children: PropTypes.any,
};

export default ChatApp;
