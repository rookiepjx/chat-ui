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
import Icon from "components/Icon";
import { useTheme } from "styled-components";
import { ReactComponent as Replied } from "assets/icon/replied.svg";

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
	const theme = useTheme();
	return (
		<StyledMessageCard active={active} {...props}>
			<Avatar src={avatarSrc} status={avatarStatus} />
			<Name>{name}</Name>
			<Time>{time}</Time>
			<StatusText>{statusText}</StatusText>
			<Message replied={replied}>
				{replied && (
					<Icon
						icon={Replied}
						width={14}
						height={14}
						color={active ? theme.inactiveColorDark : theme.inactiveColor}
						opacity={active ? 0.8 : 1}
						style={{ justifyContent: "start" }}
					/>
				)}
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
