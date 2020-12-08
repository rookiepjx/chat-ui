import React from "react";
import FilterList from ".";

export default {
	title: "页面组件/FilterList",
	component: FilterList,
};

export const Default = () => (
	<FilterList
		filterLabel="列表排序"
		options={["好友在线优先", "最新消息优先"]}
		actionsLabel="新建会话"
	>
		列表内容...
	</FilterList>
);
