import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ListContainer } from "./style";
import FilterList from "components/FilterList";
import MessageCard from "components/MessageCard";
import { useTrail, animated } from "react-spring";
import { messageList } from "data/data";
function MessageList({ children, ...props }) {
	const length = messageList.length;
	const animations = useTrail(length, {
		transform: "translate3d(0,0,0)",
		from: { transform: "translate3d(-50px,0,0)" },
		config: {
			mass: 0.8,
			tension: 280,
			friction: 20,
		},
		delay: 200,
	});
	return (
		<StyledMessageList {...props}>
			<FilterList
				options={["好友在线优先", "最新消息优先"]}
				actionsLabel="新建会话"
			>
				<ListContainer>
					{messageList.map((item, index) => (
						<animated.div key={index} style={animations[index]}>
							<MessageCard
								key={index}
								name={item.name}
								active={item.active}
								replied={item.replied}
								avatarSrc={item.avatarSrc}
								avatarStatus={item.avatarStatus}
								statusText={item.statusText}
								message={item.message}
								time={item.time}
								unreadCount={item.unreadCount}
							/>
						</animated.div>
					))}
				</ListContainer>
			</FilterList>
		</StyledMessageList>
	);
}

MessageList.propTypes = {
	children: PropTypes.any,
};

export default MessageList;
