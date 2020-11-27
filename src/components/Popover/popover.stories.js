import React from "react";
import Popover from ".";
import Button from "components/Button";
import Emoji from "components/Emoji";

export default {
	title: "UI组件/Popover",
	component: Popover,
};
/* eslint-disable jsx-a11y/accessible-emoji */
export const Default = () => (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "50vh",
						}}
					>
						<Popover content="Hello">
              <Button type="primary">点我试试<Emoji label="love">😍</Emoji></Button>
            </Popover>
					</div>
        );
        
        /* eslint-disable jsx-a11y/accessible-emoji */
export const WithOffset = () => (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: "50vh",
						}}
					>
						<Popover content="Hello" offset={{ x:"-22%"}}>
							<Button type="primary">
								点我试试<Emoji label="love">😍</Emoji>
							</Button>
						</Popover>
					</div>
				);