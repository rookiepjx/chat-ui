import React from "react";
import Badge from ".";

import "story.css"

export default {
  title: "UI组件/Badge",
  component: Badge
};

export const Default = () => {
  return (
		<div className="row">
			<Badge count={0} />
			<Badge count={2} />
			<Badge count={5} />
			<Badge count={10} />
		</div>
	);
};

export const BackgroundColor = () => {
	return (
		<div className="row">
			<Badge count={2} />
			<Badge count={5} bgc="#E6A23C" />
			<Badge count={10} bgc="#34D859" />
		</div>
	);
};

export const Size = () => {
	return (
		<div className="row">
			<Badge count={5} bgc="skyblue" size="mini" />
			<Badge count={2} />
			<Badge count={10} bgc="purple" size="large" />
		</div>
	);
};

export const ChildrenNode = () => {
	return (
		<div className="row">
			<Badge count={2}>
				<div style={{padding:"4px",borderRadius:"4px",background:"skyblue",
			color:"white"}}>New message</div>
			</Badge>
			
		</div>
	);
};