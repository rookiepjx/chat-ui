import React from "react";
import Heading from ".";

export default {
  title: "排版组件/Heading",
  component: Heading
};

export const H1 = () => <Heading level={1}>H1标题</Heading>;
export const H2 = () => <Heading level={2}>H2标题</Heading>;
export const H3 = () => <Heading level={3}>H3标题</Heading>;