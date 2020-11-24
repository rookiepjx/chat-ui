import React from "react";
import PropTypes from "prop-types";
import StyledMessageCard from "./style";
import {
	Name,
	Time,
	Message,
	MessageText,
	UnreadBadge,
	StatusText,
} from "./style";
import Avatar from "components/Avatar";

function MessageCard({
	children,
	avatarSrc,
	avatarStatus,
	statusText,
	name,
	time,
	message,
	unreadCount,
	active,
	replied,
	...props
}) {
	return (
		<StyledMessageCard active={active} {...props}>
			<Avatar src={avatarSrc} status={avatarStatus} />
			<Name>{name}</Name>
			<StatusText>{StatusText}</StatusText>
			<Time>{time}</Time>
			<Message>
				<MessageText>{message}</MessageText>
				<UnreadBadge count={unreadCount} />
			</Message>
		</StyledMessageCard>
	);
}

MessageCard.propTypes = {
	children: PropTypes.any,
	avatarSrc: PropTypes.string.isRequired,
	avatarStatus: PropTypes.any,
	statusText: PropTypes.any,
	name: PropTypes.any,
	time: PropTypes.any,
	message: PropTypes.any,
	unreadCount: PropTypes.number,
	active: PropTypes.bool,
	replied: PropTypes.bool,
};

export default MessageCard;
