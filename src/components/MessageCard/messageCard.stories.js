import React from "react";
import MessageCard from ".";
import face1 from "assets/images/face-male-1.jpg";

export default {
	title: "UI组件/MessageCard",
	component: MessageCard,
};

export const Default = () => (
	<MessageCard
		avatarSrc={face1}
		avatarStatus="online"
		name="彭佳鑫"
		statusText="在线"
		time="3 小时前"
		message="湖人总冠军"
		unreadCount={2}
	/>
);

export const Active = () => (
	<MessageCard
		avatarSrc={face1}
		avatarStatus="online"
		name="彭佳鑫"
		statusText="在线"
		time="3 小时前"
		message="湖人总冠军"
		unreadCount={2}
		active
	/>
);

export const Replied = () => (
	<MessageCard
		avatarSrc={face1}
		avatarStatus="online"
		name="彭佳鑫"
		statusText="在线"
		time="3 小时前"
		message="湖人总冠军"
		unreadCount={2}
		replied
		active
	/>
);

export const RepliedInactive = () => (
	<MessageCard
		avatarSrc={face1}
		avatarStatus="online"
		name="彭佳鑫"
		statusText="在线"
		time="3 小时前"
		message="湖人总冠军"
		unreadCount={2}
		replied
		active
	/>
);
