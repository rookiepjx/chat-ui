import React from "react";
import PropTypes from "prop-types";
import StyledMessageList, { ListContainer } from "./style";
import FilterList from "components/FilterList";
import MessageCard from "components/MessageCard";
import face1 from "assets/images/face-male-1.jpg";

function MessageList({ children, ...props }) {
	return (
		<StyledMessageList {...props}>
			<FilterList options={["好友在线优先","最新消息优先"]} actionsLabel="新建会话">
				<ListContainer>
					{[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
						return (
							<MessageCard
								key={index}
								name="彭佳鑫"
								active={index === 0}
								replied={index % 2 === 0}
								avatarSrc={face1}
								avatarStatus="online"
								statusText="在线"
								message="湖人总冠军"
								time="3 小时前"
								unreadCount={2}
							/>
						);
					})}
				</ListContainer>
			</FilterList>
		</StyledMessageList>
	);
}

MessageList.propTypes = {
	children: PropTypes.any,
};

export default MessageList;
