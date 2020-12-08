import styled from "styled-components";
import StyledNoteCard from "components/NoteCard/style"

const StyledNoteList = styled.div`
	height: 100vh;
	overflow-y: auto;
	${StyledNoteCard} {
		margin: 10px 0;
	}
`;

export default StyledNoteList;

