import React from "react";
import PropTypes from "prop-types";
import StyledMessageBubble, {
	Bubble,
	MessageText,
	BubbleTip,
	Time,
} from "./style";
import { ReactComponent as plus } from "assets/icon/plus.svg";

function MessageBubble({ children, type, time, ...props }) {
	return (
		<StyledMessageBubble type={type} {...props}>
			<Bubble>
				<MessageText>{children}</MessageText>
				<BubbleTip icon={plus} width={40} height={40} color="black" />
			</Bubble>
			<Time>{time}</Time>
		</StyledMessageBubble>
	);
}

MessageBubble.propTypes = {
  children: PropTypes.any,
  type:PropTypes.bool,
  time:PropTypes.string
};

export default MessageBubble;
