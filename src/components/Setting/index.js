import React from "react";
import PropTypes from "prop-types";
import StyledSetting, {
	StyledSettingGroup,
	StyledSettingItem,
	StyledSettingControl,
} from "./style";
import Paragraph from "components/Paragraph";
import Icon from "components/Icon";

import { ReactComponent as ArrowMenuRight } from "assets/icon/arrowMenuRight.svg";
import Switch from "components/Switch";
import Separator from "components/Separator";
import { Link, BrowserRouter } from "react-router-dom";
import "styled-components/macro";

function Setting({ children, ...props }) {
	return (
		<StyledSetting {...props}>
			<SettingGroup title="账号设置">
				<SettingItem
					label="免密支付"
					description="小额支付时免输入密码"
				></SettingItem>
				<SettingItem label="切换用户" type="menu" />
			</SettingGroup>
			<SettingGroup title="通用设置">
				<SettingItem label="新消息通知" />
				<SettingItem label="语音和视频通话提醒" />
				<SettingItem label="显示通知详情" />
				<SettingItem label="声音" />
			</SettingGroup>
			<SettingGroup title="隐私设置">
				<BrowserRouter>
					<Link
						to="/setting/blocked"
						css={`
							text-decoration: none;
							color: inherit;
						`}
					>
						<SettingItem label="查看已屏蔽好友列表" type="menu" />
					</Link>
				</BrowserRouter>
			</SettingGroup>
		</StyledSetting>
	);
}

function SettingGroup({ title, children, ...props }) {
	return (
		<StyledSettingGroup>
			<Paragraph size="xlarge" style={{ paddingBottom: "12px" }}>
				{title}
			</Paragraph>
			{children}
		</StyledSettingGroup>
	);
}

export function SettingItem({
	label,
	type = "switch",
	description,
	children,
	...props
}) {
	return (
		<StyledSettingItem {...props}>
			<StyledSettingControl>
				<Paragraph size="normal">{label}</Paragraph>
				{type === "menu" && <Icon icon={ArrowMenuRight} />}
				{type === "switch" && <Switch />}
			</StyledSettingControl>
			{description && <Paragraph type="secondary">{description}</Paragraph>}
			<Separator style={{ margin: "10px 0" }} />
		</StyledSettingItem>
	);
}

Setting.propTypes = {
	children: PropTypes.any,
	type: PropTypes.oneOf(["menu", "switch"]),
	label: PropTypes.string,
	description: PropTypes.string,
};

export default Setting;
