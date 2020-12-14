import React from "react";
import PropTypes from "prop-types";
import StyledConversation, {
	ConversationList,
	MyBubble,
} from "./style";
import TitleBar from "components/TitleBar";
import MessageBubble from "components/MessageBubble";
import Emoji from "components/Emoji";
import ChatFooter from "components/ChatFooter";
import { useSpring, animated } from "react-spring";

/* eslint-disable jsx-a11y/accessible-emoji */
function Conversation({ children, onAvatarClick, onVideoClick, ...props }) {
	// titleBar动画
	const titleBarAnimation = useSpring({
		opacity: 1,
		transform: "translate3d(0,0,0)",
		from: {
			opacity: 0,
			transform: "translate3d(0,-50px,0)",
		},
		config: {
			tension: 180,
		},
		delay: 400,
	});
	// 聊天区动画
	const conversationAnimation = useSpring({
		opacity: 1,
		transform: "translate3d(0,0,0)",
		from: {
			opacity: 0,
			transform: "translate3d(50px,0,0)",
		},
		config: {
			tension: 180,
		},
		delay: 600,
	});
	// 底部输入框动画;
	const footerAnimation = useSpring({
		opacity: 1,
		transform: "translate3d(0,0,0)",
		from: {
			opacity: 0,
			transform: "translate3d(0,50px,0)",
		},
		config: {
			tension: 180,
		},
		delay: 800,
	});

	return (
		<StyledConversation {...props}>
			<animated.div style={titleBarAnimation}>
				<TitleBar
					animationProps={titleBarAnimation}
					onAvatarClick={onAvatarClick}
					onVideoClick={onVideoClick}
				/>
			</animated.div>
			<ConversationList style={conversationAnimation}>
				
				<MessageBubble time="下午 14:30">
					Hi,最近在忙什么呢？
					<Emoji label="smile">😜</Emoji>
				</MessageBubble>
				<MyBubble time="下午 14:32">
					Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
				</MyBubble>
				<MessageBubble time="下午 14:33">
					针不戳！哈哈哈哈哈哈哈
					<Emoji label="smile">😜</Emoji>
				</MessageBubble>
			</ConversationList>
			{/* <animated.div style={footerAnimation}> */}
			<ChatFooter animationProps={footerAnimation} />
			{/* </animated.div> */}
		</StyledConversation>
	);
}

Conversation.propTypes = {
	children: PropTypes.any,
};

export default Conversation;
