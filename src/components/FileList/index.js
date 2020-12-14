import React from "react";
import PropTypes from "prop-types";
import StyledFileList from "./style";
import FilterList from "components/FilterList";

import { fileList } from "data/data";
import FileCard from "components/FileCard";
import { animated } from "react-spring";
import useAnimation from "hooks/animationHook";

function FileList({ children, ...props }) {
	const num = fileList.length;
	const animations = useAnimation(num);
	return (
		<StyledFileList {...props}>
			<FilterList
				filterLabel="文件排序"
				options={["按文件名排序", "按文件大小排序", "按时间排序"]}
				actionsLabel="上传文件"
			>
				{fileList.map((item, index) => (
					<animated.div key={index} style={animations[index]}>
						<FileCard
							key={index}
							fileType={item.type}
							name={item.name}
							size={item.size}
							time={item.time}
						/>
					</animated.div>
				))}
			</FilterList>
		</StyledFileList>
	);
}

FileList.propTypes = {
	children: PropTypes.any,
};

export default FileList;
