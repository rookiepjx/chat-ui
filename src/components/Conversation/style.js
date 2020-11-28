import styled from "styled-components";
import MessageBubble from "components/MessageBubble";

const StyledConversation = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;
	border: 1px solid ${({ theme }) => theme.gray};
	& > *:last-child {
		align-self:end;
	}
`;

const ConversationList = styled.div`
	padding: 10px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	overflow-y: auto;
	width:100%;
  flex:1;
	& > * {
		margin: 10px 0;
	}
`;

const MyBubble = styled(MessageBubble).attrs({ type: "mine" })`
	align-self: flex-end;
`;

export default StyledConversation;
export { ConversationList, MyBubble };
