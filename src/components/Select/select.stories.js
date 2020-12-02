import React from "react";
import Select from ".";
import Option from "../Option/index";

export default {
	title: "UI组件/Select",
	component: Select,
};

export const Default = () => (
	<Select>
		<Option>北京市</Option>
		<Option>上海市</Option>
	</Select>
);

export const FormSelect = () => (
	<Select type="form">
		<Option>北京市</Option>
		<Option>河北省</Option>
	</Select>
);

export const FormSelectWithLabel = () => (
	<Select label="省份" type="form" style={{width:"60px"}}>
		<Option>北京市</Option>
		<Option>河北省</Option>
	</Select>
);
