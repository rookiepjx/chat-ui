import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import {ReactComponent as call} from "assets/icon/call.svg"
import { ReactComponent as camera } from "assets/icon/camera.svg";
import { ReactComponent as options } from "assets/icon/options.svg";

function TitleBar({
	children,
	avatarSrc,
	avatarStatus,
	name,
	statusText,
	time,
	...props
}) {
	return (
		<StyledTitleBar {...props}>
			<Avatar src={avatarSrc} status={avatarStatus} />
			<Title>
				<Paragraph size="large">{name}</Paragraph>
				<Paragraph type="secondary">
					<Text>{statusText}</Text>
					<Text> • 最后阅读 {time}</Text>
				</Paragraph>
			</Title>
			<Actions>
				<Icon opacity={0.3} icon={call} />
				<Icon opacity={0.3} icon={camera} />
				<Icon opacity={0.3} icon={options} />
			</Actions>
		</StyledTitleBar>
	);
}

TitleBar.propTypes = {
	children: PropTypes.any,
	avatarSrc: PropTypes.any,
	avatarStatus: PropTypes.any,
	name: PropTypes.string,
	statusText: PropTypes.oneOf(["在线","离线"]),
	time: PropTypes.string,
};

export default TitleBar;
