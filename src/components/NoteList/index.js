import React from "react";
import PropTypes from "prop-types";
import StyledNoteList from "./style";
import { noteList } from "data/data";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import { animated } from "react-spring";
import useAnimation from "hooks/animationHook";

function NoteList({ children, ...props }) {
	const num = noteList.length;
	const animations = useAnimation(num);
	return (
		<StyledNoteList {...props}>
			<FilterList
				filterLabel="笔记列表"
				options={["笔记名排序", "时间排序"]}
				actionsLabel="新建笔记"
			>
				{noteList.map((item, index) => (
					<animated.div key={index} style={animations[index]}>
						<NoteCard
							key={index}
							name={item.name}
							time={item.time}
							content={item.content}
							image={item.image}
						/>
					</animated.div>
				))}
			</FilterList>
		</StyledNoteList>
	);
}

NoteList.propTypes = {
	children: PropTypes.any,
};

export default NoteList;
