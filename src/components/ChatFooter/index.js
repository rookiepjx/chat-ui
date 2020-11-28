import React from "react";
import PropTypes from "prop-types";
import StyledChatFooter, { IconContainer,StyledPopoverContent } from "./style";
import Input from "components/Input";
import Icon from "components/Icon";
import Button from "components/Button";
import Popover from "components/Popover";
import { ReactComponent as clip } from "assets/icon/clip.svg";
import { ReactComponent as microphone } from "assets/icon/microphone.svg";
import { ReactComponent as smile } from "assets/icon/smile.svg";
import { ReactComponent as plane } from "assets/icon/plane.svg";
import { ReactComponent as options } from "assets/icon/options.svg";
import {useTheme} from "styled-components"
import Emoji from "components/Emoji";
import { useState } from "react";
function ChatFooter({ children, ...props }) {
	const theme = useTheme()
	const [emojiActive, setEmojiActive] = useState(false)
	return (
		<StyledChatFooter {...props}>
			<Input
				placeholder="请输入想和对方说的话"
				prefix={<Icon icon={clip} />}
				suffix={
					<IconContainer>
						<Popover
							content={<PopoverContent color={theme.gray} />}
							offset={{ x: "-20%" }}
							onVisible={() => setEmojiActive(true)}
							onHide={() => setEmojiActive(false)}
						>
							<Icon icon={smile} color={emojiActive?"":theme.gray} />
						</Popover>
						<Icon icon={microphone} />
						<Button type="primary" shape="circle" size="46px">
							<Icon color="white" icon={plane} />
						</Button>
					</IconContainer>
				}
			/>
		</StyledChatFooter>
	);
}

ChatFooter.propTypes = {
	children: PropTypes.any,
};

function PopoverContent({color}){
  return (
		<StyledPopoverContent>
			<Emoji>🤣</Emoji>
			<Emoji>😎</Emoji>
			<Emoji>😍</Emoji>
			<Emoji>😊</Emoji>
			<Emoji>😋</Emoji>
			<Emoji>🤑</Emoji>
			<Icon icon={options} color={color}/>
		</StyledPopoverContent>
	);
}

export default ChatFooter;
