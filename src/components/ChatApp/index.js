import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
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
import { animated, useTransition } from "react-spring";

function ChatApp({ children, ...props }) {
	const [showDrawer, setShowDrawer] = useState(false);
	const [showVideoCall, setShowVideoCall] = useState(false);

	// sidebar切换过渡动画
	const location = useLocation();
	// 一级路由 setting 改变时触发动画，二级路由改变不触发
	const getFirstPath = (location) => location.pathname.split("/")[1];
	const transitions = useTransition(location, getFirstPath, {
		from: { opacity: 0, transform: "translate3d(-100px,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-100px,0,0)" },
	});
	return (
		<StyledChatApp {...props}>
			<Nav>
				<Navbar />
			</Nav>
			<SideBar>
				{transitions.map(({ item, props, key }) => (
					<animated.div key={key} style={props}>
						<Switch location={item}>
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
					</animated.div>
				))}
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
