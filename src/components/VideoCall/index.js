import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledVideoCall, {
	ButtonGroups,
	Operation,
	Self,
	Minimize,
	MinimizeScreen,
} from "./style";

import videoCall from "assets/images/video-caller.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCompressAlt,
	faMicrophone,
	faPhoneSlash,
	faVolumeMute,
	faVideo,
} from "@fortawesome/free-solid-svg-icons";
import face from "assets/images/face-male-1.jpg";
import Avatar from "components/Avatar";
import "styled-components/macro";
import Paragraph from "components/Paragraph";

function VideoCall({ children,onHangOff, ...props }) {
	const [fullScreen, setFullScreen] = useState(true);
	if (fullScreen) {
		return (
			<StyledVideoCall src={videoCall} {...props}>
				<Minimize shape="rect" onClick={() => setFullScreen(false)}>
					<FontAwesomeIcon icon={faCompressAlt} />
				</Minimize>
				<ButtonGroups>
					<Operation>
						<FontAwesomeIcon icon={faMicrophone} />
					</Operation>
					<Operation _type="hangoff" onClick={onHangOff}>
						<FontAwesomeIcon icon={faPhoneSlash} />
					</Operation>
					<Operation>
						<FontAwesomeIcon icon={faVolumeMute} />
					</Operation>
				</ButtonGroups>
				<Self src={face} size="120px" />
			</StyledVideoCall>
		);
	}
	return (
		<MinimizeScreen
			onClick={() => setFullScreen(true)}
			css={`
				cursor: pointer;
			`}
		>
			<Avatar
				src={face}
				css={`
					grid-area: avatar;
				`}
			/>
			<Paragraph
				size="medium"
				css={`
					grid-area: info;
				`}
			>
				正在和 李明 视屏通话
			</Paragraph>
			<Paragraph
				type="secondary"
				css={`
					grid-area: action;
				`}
			>
				点击切换全屏显示
			</Paragraph>
			<FontAwesomeIcon
				icon={faVideo}
				css={`
					grid-area: icon;
					justify-self: end;
					opacity: 0.4;
					font-size: 16px;
				`}
			></FontAwesomeIcon>
		</MinimizeScreen>
	);
}

VideoCall.propTypes = {
	children: PropTypes.any,
};

export default VideoCall;
