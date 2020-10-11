import React from "react";
import Icon from ".";

import "story.css";

import { ReactComponent as smileIcon } from "assets/icon/smile.svg";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faAd } from "@fortawesome/free-solid-svg-icons";

export default {
	title: "UI组件/Icon",
	component: Icon,
};

export const Default = () => <Icon icon={smileIcon} />;

export const Sizes = () => {
	return (
		<div className="row">
			<Icon icon={smileIcon} />
			<Icon width={30} height={30} icon={smileIcon} />
			<Icon width={40} height={40} icon={smileIcon} />
			<Icon width={50} height={50} icon={smileIcon} />
		</div>
	);
};

export const Color = () => {
  return (
		<div className="row">
			<Icon icon={smileIcon} />
			<Icon width={30} height={30} color="skyblue" icon={smileIcon} />
			<Icon width={40} height={40} color="pink" icon={smileIcon} />
			<Icon width={50} height={50} color="orange" icon={smileIcon} />
		</div>
	);
};

export const Opacity = () => {
	return (
		<div className="row">
			<Icon icon={smileIcon} />
			<Icon width={30} height={30} color="skyblue" opacity={0.4} icon={smileIcon} />
			<Icon width={40} height={40} color="pink" opacity={0.7} icon={smileIcon} />
			<Icon width={50} height={50} color="orange" opacity={0.6} icon={smileIcon} />
		</div>
	);
};

export const Fontawesome = () => {
  return (
		<div className="row">
			<FontAwesomeIcon icon={faCommentDots} />
			<FontAwesomeIcon
				icon={faFacebook}
				style={{ color: "skyblue", fontSize: "30px" }}
			/>
			<FontAwesomeIcon icon={faAd} style={{ fontSize: "30px" }} />
		</div>
	);
}