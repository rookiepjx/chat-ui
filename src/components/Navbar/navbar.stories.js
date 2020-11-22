import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar from ".";
import { MenuItem } from ".";

// 引入marcos插件
import "styled-components/macro"

export default {
	title: "UI组件/Navbar",
	component: Navbar,
};

export const Default = () => <Navbar>默认</Navbar>;

export const Menu = () => {
  return (
		<div
			css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width:100px
			`}
		>
			<MenuItem active showBadge icon={faCommentDots} />
		</div>
	);
};
