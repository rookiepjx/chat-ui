import styled from "styled-components";
import MessageBubble from "components/MessageBubble";
import {animated} from "react-spring"

const StyledConversation = styled.div`
	/* position: relative; */
	display: flex;
	flex-direction: column;
	height: 100vh;
	border: 1px solid ${({ theme }) => theme.gray};
	& > *:last-child {
		align-self: end;
	}
`;

const ConversationList = styled(animated.div)`
	padding: 10px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	overflow-y: auto;
	width: 100%;
	height: 100%;
	flex: 1;
	& > * {
		max-width: 80%;
		margin: 10px 0;
	}
`;

const MyBubble = styled(MessageBubble).attrs({ type: "mine" })`
	align-self: flex-end;
`;

export default StyledConversation;
export { ConversationList, MyBubble };
