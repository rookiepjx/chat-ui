import Icon from "components/Icon";
import React from "react";
import Button from ".";
import {ReactComponent as plus} from "assets/icon/plus.svg"

export default {
  title: "UI组件/Button",
  component: Button
};

export const Default = () => <Button>默认按钮</Button>;
export const Primary = () => <Button type="primary">主要按钮</Button>;
export const Success = () => <Button type="success">成功按钮</Button>;
export const Info = () => <Button type="info">信息按钮</Button>;
export const Danger = () => <Button type="danger">危险按钮</Button>;
export const Warn = () => <Button type="warn">警告按钮</Button>;
export const Circle = () => <Button type="primary" shape="circle" size="40px">
  <Icon icon={plus} width="16px" height="16px"/>
</Button>;