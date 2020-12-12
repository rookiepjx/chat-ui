import React from "react";
import Dropdown from ".";
import { DropdownItem } from "./style";
import Paragraph from "components/Paragraph";
import Separator from "components/Separator";
import Icon from "components/Icon";

import { ReactComponent as Options } from "assets/icon/options.svg";

export default {
	title: "UI组件/Dropdown",
	component: Dropdown,
};

const dropdown = (
	<d>
		<DropdownItem>
			<Paragraph>个人信息</Paragraph>
		</DropdownItem>
		<DropdownItem>
			<Paragraph>设置中心</Paragraph>
		</DropdownItem>
		<Separator />
		<DropdownItem>
			<Paragraph type="danger">退出登录</Paragraph>
		</DropdownItem>
	</d>
);

export const Default = () => (
	<div
		style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
	>
		<Dropdown content={dropdown}>
			<Icon opacity={0.5} icon={Options} />
		</Dropdown>
	</div>
);

export const AlignRight = () => (
	<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
		<Dropdown align="right" content={dropdown}>
			<Icon opacity={0.5} icon={Options} />
		</Dropdown>
	</div>
);
