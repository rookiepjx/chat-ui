import styled,{css} from "styled-components";
import Text from "../Text/index";

const StyledParagraph = styled(Text)`
	${({ ellipsis }) =>
		ellipsis &&
		css`
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		`}
`;

export default StyledParagraph;
