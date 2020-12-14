import React from "react";
import PropTypes from "prop-types";
import StyledContactList from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";

import { contactList } from "data/data";
import { animated } from "react-spring";
import useAnimation from "hooks/animationHook";

function ContactList({ children, ...props }) {
	const num = contactList.length;
	const animations = useAnimation(num);
	return (
		<StyledContactList {...props}>
			<FilterList
				options={["按名字排序", "按状态排序"]}
				actionsLabel="新建联系人"
			>
				{contactList.map((item, index) => (
					<animated.div key={index} style={animations[index]}>
						<ContactCard
							key={item.name}
							avatarSrc={item.avatar}
							name={item.name}
							intro={item.intro}
						/>
					</animated.div>
				))}
			</FilterList>
		</StyledContactList>
	);
}

ContactList.propTypes = {
	children: PropTypes.any,
};

export default ContactList;
