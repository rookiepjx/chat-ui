import React from "react";
import Avatar from "./index";

import "story.css";

import image1 from "assets/images/kobe.jpg";
import image2 from "assets/images/taylor.jpg";
import image3 from "assets/images/patrick.jpg";
// 导出默认对象，构建侧边栏的一级菜单
export default {
	title: "UI组件/Avatar",
	component: Avatar,
};

// 构建侧边栏的二级菜单
export const Default = () => {
	return (
		<div className="row">
			<Avatar src={image1} status="online" />
			<Avatar src={image2} status="online" />
			<Avatar src={image3} status="online" />
		</div>
	);
};

// 尺寸头像
export const Size = () => {
	return (
		<div className="row">
			<Avatar src={image1} />
			<Avatar src={image1} size="56px" />
			<Avatar src={image1} size="64px" />
			<Avatar src={image1} size="72px" />
		</div>
	);
};

// 状态头像
export const Status = () => {
	return (
		<div className="row">
			<Avatar src={image2} status="online" />
			<Avatar src={image2} size="56px" iconSize="10px" status="offline" />
			<Avatar src={image2} size="64px" iconSize="12px" status="online" />
			<Avatar src={image2} size="72px" iconSize="14px" status="offline" />
		</div>
	);
};
