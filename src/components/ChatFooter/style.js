import styled from "styled-components";
import {animated} from "react-spring"
const StyledChatFooter = styled(animated.div)`
	padding: 20px;
	width: 100%;
`;

const IconContainer = styled.div`
	display: flex;
	align-items: center;
	margin-right: -30px;
	& > * {
		margin-left: 18px;
	}
`;

const StyledPopoverContent = styled.div`
	display: flex;
	& > * {
		margin: 0 8px;
		font-size: 16px;
	}
`;

export default StyledChatFooter;
export { IconContainer, StyledPopoverContent };
