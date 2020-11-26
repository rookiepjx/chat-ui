import React from "react";
import MessageBubble from ".";

export default {
	title: "UI组件/MessageBubble",
	component: MessageBubble,
};

export const Default = () => (
	<MessageBubble time="昨天 14:20">
		湖人总冠军
		<span aria-label="smile" role="img">
			😄
		</span>
	</MessageBubble>
);
export const Mine = () => (
					<MessageBubble time="昨天 14:20" type="mine">
						湖人总冠军
						<span aria-label="smile" role="img">
							😄
						</span>
					</MessageBubble>
				);
