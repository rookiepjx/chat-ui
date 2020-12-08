import Paragraph from "components/Paragraph";
import styled from "styled-components";
import StyledAvatar from "components/Avatar/style";
import { card } from "utils/mixins";
const StyledContactCard = styled.div`
	${card}
	display: grid;
	grid-template-areas:
		"avatar name"
		"avatar intro";
	grid-template-columns: 62px 1fr;
	${StyledAvatar} {
		grid-area: avatar;
	}
`;

const Name = styled(Paragraph).attrs({ size: "large" })`
	grid-area: name;
`;

const Intro = styled(Paragraph).attrs({ type: "secondary" })`
	grid-area: intro;
`;

export default StyledContactCard;
export { Name, Intro };
