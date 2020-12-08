import React from "react";
import PropTypes from "prop-types";
import StyledContactList from "./style";
import FilterList from "components/FilterList";
import ContactCard from "components/ContactCard";

import { contactList } from "data/data";


function ContactList({ children, ...props }) {
	return (
		<StyledContactList {...props}>
			<FilterList options={["按名字排序","按状态排序"]} actionsLabel="新建联系人">
				{contactList.map((item, index) => {
					return (
            <ContactCard
						key={item.name}
						avatarSrc={item.avatar}
						name={item.name}
						intro={item.intro}
					/>
          )
				})}
			</FilterList>
		</StyledContactList>
	);
}

ContactList.propTypes = {
	children: PropTypes.any,
};

export default ContactList;
