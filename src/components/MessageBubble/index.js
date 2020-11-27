import React from "react";
import PropTypes from "prop-types";
import StyledMessageBubble, {
	Bubble,
	MessageText,
	BubbleTip,
	Time,
} from "./style";
import { ReactComponent as bubbleTip } from "assets/icon/bubbleTip.svg";
import Icon from "components/Icon";

function MessageBubble({ children, type, time, ...props }) {
	return (
		<StyledMessageBubble type={type} {...props}>
			<Bubble>
				<MessageText>{children}</MessageText>
				<BubbleTip>
					<Icon icon={bubbleTip} width={40} height={28} color="white" />
				</BubbleTip>
			</Bubble>
			<Time>{time}</Time>
		</StyledMessageBubble>
	);
}

MessageBubble.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(["mine"]),
	time: PropTypes.string,
};

export default MessageBubble;
