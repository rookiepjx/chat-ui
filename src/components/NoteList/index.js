import React from "react";
import PropTypes from "prop-types";
import StyledNoteList from "./style";
import { noteList } from "data/data";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";

function NoteList({ children, ...props }) {
	return (
		<StyledNoteList {...props}>
			<FilterList
				filterLabel="笔记列表"
				options={["笔记名排序", "时间排序"]}
				actionsLabel="新建笔记"
			>
				{noteList.map((item, index) => {
					return (
						<NoteCard
							key={index}
							name={item.name}
							time={item.time}
							content={item.content}
							image={item.image}
						/>
					);
				})}
			</FilterList>
		</StyledNoteList>
	);
}

NoteList.propTypes = {
	children: PropTypes.any,
};

export default NoteList;
