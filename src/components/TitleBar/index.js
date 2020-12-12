import React from "react";
import PropTypes from "prop-types";
import StyledTitleBar, { Title, Actions } from "./style";
import Avatar from "components/Avatar";
import Paragraph from "components/Paragraph";
import Text from "components/Text";
import Icon from "components/Icon";
import Dropdown from "components/Dropdown"
import {ReactComponent as call} from "assets/icon/call.svg"
import { ReactComponent as camera } from "assets/icon/camera.svg";
import { ReactComponent as options } from "assets/icon/options.svg";
import face1 from "assets/images/face-male-1.jpg";
import {dropdown} from "components/Dropdown/dropdown.stories"

function TitleBar({
	children,
	...props
}) {
	return (
		<StyledTitleBar {...props}>
			<Avatar src={face1} status="offline" />
			<Title>
				<Paragraph size="large">彭佳鑫</Paragraph>
				<Paragraph type="secondary">
					<Text>离线</Text>
					<Text> • 最后阅读 3 小时前</Text>
				</Paragraph>
			</Title>
			<Actions>
				<Icon opacity={0.3} icon={call} />
				<Icon opacity={0.3} icon={camera} />
				<Dropdown align="right" content={dropdown}>
					<Icon opacity={0.3} icon={options} />
				</Dropdown>
			</Actions>
		</StyledTitleBar>
	);
}

TitleBar.propTypes = {
	children: PropTypes.any,

};

export default TitleBar;
