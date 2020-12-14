import React from "react";
import Dropdown from ".";

import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Separator from "components/Separator";
import { DropdownItem } from "./style";

import { ReactComponent as Options } from "assets/icon/options.svg";

export default {
	title: "UI组件/Dropdown",
	component: Dropdown,
};

const dropdown = (
	<>
		<DropdownItem>
			<Paragraph>查看主页</Paragraph>
		</DropdownItem>
		<DropdownItem>
			<Paragraph>屏蔽好友</Paragraph>
		</DropdownItem>
		<Separator />
		<DropdownItem>
			<Paragraph type="danger">删除好友</Paragraph>
		</DropdownItem>
	</>
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
	<div
		style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
	>
		<Dropdown align="right" content={dropdown}>
			<Icon opacity={0.5} icon={Options} />
		</Dropdown>
	</div>
);
