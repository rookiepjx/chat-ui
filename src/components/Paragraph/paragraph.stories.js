import React from "react";
import Paragraph from ".";

export default {
	title: "排版组件/Paragraph",
	component: Paragraph,
	decorators: [(storyFn) => <div style={{ padding: "10px" }}>{storyFn()}</div>],
};

export const Default = () => (
	<>
		<Paragraph>段落</Paragraph>
		<Paragraph>段落</Paragraph>
	</>
);
export const Ellipsis = () => (
	<>
		<Paragraph ellipsis>
			超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落
			超出省略段落 超出省略段落超出省略段落 超出省略段落 超出省略段落
		</Paragraph>
		<Paragraph ellipsis>
			超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落超出省略段落
			超出省略段落 超出省略段落超出省略段落 超出省略段落 超出省略段落
		</Paragraph>
	</>
);
