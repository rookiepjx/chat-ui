import React from "react";
import Text from ".";

export default {
  title: "排版组件/Text",
  component: Text
};

export const Default = () => <Text>主要文本</Text>;

export const Secondary = () => <Text type="secondary">次要文本</Text>

export const Danger = () => <Text type="danger">危险文本</Text>

export const Normal = () => <Text size="normal">Normal文本</Text>;
export const Medium = () => <Text size="medium">Medium文本</Text>;
export const Large = () => <Text size="large">Large文本</Text>;
export const XXLarge = () => <Text size="xxlarge">XXLarge文本</Text>;
export const XLarge = () => <Text size="xlarge">XLarge文本</Text>;
export const Small = () => <Text size="small">Small文本</Text>;
export const XXSmall = () => <Text size="xxsmall">XXSmall文本</Text>;
export const XSmall = () => <Text size="xsmall">XSmall文本</Text>;
export const Bold = () => <Text bold>加粗文本</Text>;
