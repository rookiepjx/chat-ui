import { StyledAvatar } from "components/Avatar/style";
import Badge from "components/Badge";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import styled, { css } from "styled-components";
import { card, activeBar } from "utils/mixins";

const Name = styled(Text).attrs({ size: "large" })`
	grid-area: name;
`;

const Time = styled(Text).attrs({ size: "small", type: "secondary" })`
	grid-area: time;
	justify-self: end;
`;

const StatusText = styled(Text).attrs({ size: "small", type: "secondary" })`
	grid-area: status;
`;

const Message = styled.div`
	grid-area: message;
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 30px;
	${({ replied }) =>
		replied &&
		css`
			grid-template-columns: 24px 1fr 30px;
		`};
`;

const MessageText = styled(Paragraph).attrs({ ellipsis: true })`
	font-size: ${({ theme }) => theme.normal};
`;

const UnreadBadge = styled(Badge).attrs({ size: "mini" })`
	justify-self: end;
`;

const StyledMessageCard = styled.div`
	${card()};
	display: grid;
	grid-template-areas:
		"avatar name time"
		"avatar status status"
		"message message message";
	grid-template-columns: 64px 1fr 1fr;
	row-gap: 16px;
	transition: 0.2s;
	&:hover {
		box-shadow: 0 22px 48px 0 rgba(0, 0, 0, 0.1);
  }
  
	${StyledAvatar} {
		grid-area: avatar;
  }
  
	${({ active }) =>
		active &&
		css`
      background-color:${({ theme }) => theme.darkPurple};
      ${Name},${Time},${StatusText},${MessageText}{
        color:#fff;
      }
      ${StatusText},${Time}{
        opacity:.4;
      }
      ${activeBar({ barWidth: "4px", shadowWidth: "14px" })}
      overflow:hidden;
  `}
`;

export default StyledMessageCard;
export { Name, Time, Message, MessageText, StatusText, UnreadBadge };
