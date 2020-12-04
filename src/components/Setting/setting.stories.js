import React from "react";
import Setting,{SettingItem} from ".";

export default {
  title: "页面组件/Setting",
  component: Setting
};

export const Default = () => <Setting/>;

export const WithoutDescription = () => (
	<SettingItem label="这是一个没有描述的设置项" />
);

export const WithDescription = () => (
	<SettingItem label="这是一个有描述的设置项" description="这是设置项描述" />
);

export const WithMenu = () => (
	<SettingItem label="有子菜单的设置项" type="menu" />
);