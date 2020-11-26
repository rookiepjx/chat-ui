import StyledText from "components/Text/style";
import StyledIcon from "components/Icon/style";
import StyledParagraph from "components/Paragraph/style";
import styled from "styled-components";

const Bubble = styled.div`
  padding:16px 24px;
  position:relative;
  border-radius:999px;
  z-index:10;
  box-shadow:0 8px 24px rgba(0,0,0,.1)
`;

const MessageText = styled(StyledText).attrs({size:"normal"})``;

const BubbleTip = styled(StyledIcon)`
  position: absolute;
  bottom:0;
  left:0;
  z-index:20;
`;

const Time = styled(StyledParagraph).attrs({
	type: "secondary",
	size: "small",
})`
  margin:10px;
  margin-left:20px;
  word-spacing:1rem;
`;

const StyledMessageBubble = styled.div`
	display: flex;
	flex-direction: column;
`;



export default StyledMessageBubble;
export {Bubble,MessageText,BubbleTip,Time}

