import Text from "components/Text/style";
import Paragraph from "components/Paragraph/style";
import styled,{css} from "styled-components";

const StyledMessageBubble = styled.div`
	display: flex;
	flex-direction: column;
	${({ type }) => type && typeVariants[type]};
`;

const Bubble = styled.div`
	padding: 16px 24px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	position: relative;
	z-index: 20;
`;

const MessageText = styled(Text).attrs({size:"normal"})``;

const BubbleTip = styled.div`
  position: absolute;
  left:0;
  bottom:-12px;
  z-index:10;
`;

const Time = styled(Paragraph).attrs({
	type: "secondary",
	size: "small",
})`
  margin:10px;
  margin-left:20px;
  word-spacing:1rem;
`;



const typeVariants = {
	mine: css`
		${Bubble} {
			background-color: ${({ theme }) => theme.primaryColor};
		};
    ${MessageText}{
      color:#fff;
    };
    ${Time}{
      text-align:right;
      margin-left:0;
      margin-right:20px;
    };
    ${BubbleTip}{
      transform:rotateY(180deg);
      left:unset;
      right:0;
      path{
        fill:${({theme}) => theme.primaryColor}
      }
    }
	`,
};



export default StyledMessageBubble;
export {Bubble,MessageText,BubbleTip,Time}

