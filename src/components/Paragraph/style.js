import styled,{css} from "styled-components";
import StyledText from "../Text/style";

const StyledParagraph = styled(StyledText)`
	${({ ellipsis }) =>
		ellipsis &&
		css`
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		`}
`;

export default StyledParagraph;
