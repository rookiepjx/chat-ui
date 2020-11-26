import React from "react";
import TitleBar from ".";
import face1 from "assets/images/face-male-1.jpg";

export default {
	title: "UI组件/TitleBar",
	component: TitleBar,
};

export const Default = () => (
	<TitleBar
		avatarSrc={face1}
		avatarStatus="offline"
    name="彭佳鑫"
    statusText="离线"
		time="3 小时前"
	/>
);
