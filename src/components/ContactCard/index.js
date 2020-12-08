import React from "react";
import PropTypes from "prop-types";
import StyledContactCard, { Name, Intro } from "./style";
import Avatar from "components/Avatar";
import face from "assets/images/face-male-1.jpg";

function ContactCard({
	children,
	avatarSrc = face,
	status,
	name,
	intro,
	...props
}) {
	return (
		<StyledContactCard {...props}>
			<Avatar src={avatarSrc} status={status} />
			<Name>{name}</Name>
			<Intro>{intro}</Intro>
		</StyledContactCard>
	);
}

ContactCard.propTypes = {
	children: PropTypes.any,
	name: PropTypes.string,
	intro: PropTypes.string,
};

export default ContactCard;
