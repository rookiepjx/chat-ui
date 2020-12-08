import React from "react";
import PropTypes from "prop-types";
import StyledNoteCard, {
	NoteImage,
	NoteName,
	NoteContent,
	NoteTime,
} from "./style";

import note from "assets/images/note-1.jpg";

function NoteCard({ children, name, time, content, image = note, ...props }) {
	return (
		<StyledNoteCard {...props}>
			<NoteImage src={image} />
			<NoteName>{name}</NoteName>
			<NoteTime>{time}</NoteTime>
			<NoteContent>{content}</NoteContent>
		</StyledNoteCard>
	);
}

NoteCard.propTypes = {
	children: PropTypes.any,
	image: PropTypes.string.isRequired,
	name: PropTypes.string,
	time: PropTypes.string,
	content: PropTypes.string,
};

export default NoteCard;
