import React from "react";
import PropTypes from "prop-types";
import StyledConversation, { ConversationList, MyBubble } from "./style";
import TitleBar from "components/TitleBar";
import MessageBubble from "components/MessageBubble";
import Emoji from "components/Emoji";
import ChatFooter from "components/ChatFooter";

/* eslint-disable jsx-a11y/accessible-emoji */
function Conversation({ children, ...props }) {
	return (
		<StyledConversation {...props}>
			<TitleBar />
			<ConversationList>
				<MessageBubble time="下午 14:30">
					Hi,最近在忙什么呢？<Emoji label="smile">😜</Emoji>
				</MessageBubble>
				<MyBubble time="下午 14:32">
					Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					Hello 啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！ Hello
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
					啊！最近就是一直在加班改 bug，然后 怼产品，怼 UI，各种怼！
				</MyBubble>
			</ConversationList>
			<ChatFooter />
		</StyledConversation>
	);
}

Conversation.propTypes = {
	children: PropTypes.any,
};

export default Conversation;
