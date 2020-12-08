import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import styled from "styled-components";
import { card } from "utils/mixins";

const StyledNoteCard = styled.div`
	${card()};
	display: grid;
	grid-template-areas:
		"image name time"
		"image content content";
	grid-template-columns: 72px 2fr 1fr;
`;

const NoteImage = styled.img`
	grid-area: image;
  width:60px;
  height:60px;
  object-fit:cover;
`;

const NoteName = styled(Heading).attrs({level:2})`
	grid-area: name;
  align-self:center;
`;

const NoteContent = styled(Paragraph).attrs({ size: "small" })`
	grid-area: content;
  align-self:center;
`;

const NoteTime = styled(Paragraph).attrs({ type: "secondary" })`
	grid-area: time;
  align-self:center;
  justify-self:end;
`;

export default StyledNoteCard;
export { NoteImage, NoteName, NoteContent, NoteTime };
