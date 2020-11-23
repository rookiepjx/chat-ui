import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar from ".";
import { MenuItem } from ".";

// 引入macro插件
import "styled-components/macro"

export default {
	title: "页面组件/Navbar",
	component: Navbar,
};

export const Default = () => <Navbar showBadge/>

export const Menu = () => {
  return (
		<div
			css={`
        background-color: ${({ theme }) => theme.darkPurple};
        width:100px
			`}
		>
			<MenuItem active="true" showBadge icon={faCommentDots} />
		</div>
	);
};
