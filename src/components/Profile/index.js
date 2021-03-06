import React from "react";
import PropTypes from "prop-types";
import StyledProfile, {
	SocialLinks,
	ContactSection,
	AlbumContainer,
	Album,
	AlbumTitle,
	Photo,
	CloseIcon,
} from "./style";
import Avatar from "components/Avatar";
import Icon from "components/Icon";
import Paragraph from "components/Paragraph";
import Separator from "components/Separator";
import Text from "components/Text";
import Button from "components/Button";

import "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import {
	faWeibo,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Cross } from "assets/icon/cross.svg";
import face1 from "assets/images/face-male-1.jpg";
import photo1 from "assets/images/photo1.jpg";
import photo2 from "assets/images/photo2.jpg";
import photo3 from "assets/images/photo3.jpg";

function Profile({
	children,
	status,
	showClose,
	showEditBtn,
	onCloseClick,
	onEdit,
	...props
}) {
	return (
		<StyledProfile {...props}>
			{showClose && <CloseIcon icon={Cross} onClick={onCloseClick} />}
			<Avatar
				css={`
					margin: 30px 0;
					grid-area: 1 / 1 / 2 / 2;
				`}
				src={face1}
				size="160px"
				iconSize="25px"
				status={status}
			/>
			{showEditBtn && (
				<Button
					shape="circle"
					bgColor="#4F9DDE"
					size="52px"
					css={`
						grid-area: 1 / 1 / 3 / 2;
						z-index: 10;
						position: relative;
						left: 50px;
						bottom: 14px;
						align-self: end;
					`}
				>
					<FontAwesomeIcon color="white" icon={faEdit} onClick={onEdit} />
				</Button>
			)}
			<Paragraph
				css={`
					margin-bottom: 12px;
				`}
				size="xlarge"
			>
				李明
			</Paragraph>
			<Paragraph
				css={`
					margin-bottom: 18px;
				`}
				type="secondary"
				size="normal"
			>
				中国
			</Paragraph>
			<Paragraph
				css={`
					margin-bottom: 26px;
				`}
				size="small"
			>
				一位非著名的前端开发工程师，努力学习ing...
			</Paragraph>
			<SocialLinks>
				<Icon.Social
					icon={faWeibo}
					bgColor="#F06767"
					href="http://www.weibo.com"
				/>
				<Icon.Social
					icon={faGithub}
					bgColor="black"
					href="http://www.weibo.com"
				/>
				<Icon.Social
					icon={faLinkedin}
					bgColor="#2483C0"
					href="http://www.weibo.com"
				/>
			</SocialLinks>
			<Separator
				css={`
					margin: 30px 0;
				`}
			/>
			<ContactSection>
				<Description label="联系电话">+86 1377778888</Description>
				<Description label="电子邮件">12234188@qq.com</Description>
			</ContactSection>
			<Separator
				css={`
					margin: 30px 0;
				`}
			/>
			<AlbumContainer>
				<AlbumTitle>
					相册(20)
					<a href="/">查看全部</a>
				</AlbumTitle>
				<Album>
					<Photo src={photo1} alt="" />
					<Photo src={photo2} alt="" />
					<Photo src={photo3} alt="" />
				</Album>
			</AlbumContainer>
		</StyledProfile>
	);
}
function Description({ label, children }) {
	return (
		<Paragraph>
			<Text type="secondary">{label}：</Text>
			<Text>{children}</Text>
		</Paragraph>
	);
}

Profile.propTypes = {
	children: PropTypes.any,
	editable: PropTypes.bool,
	showClose: PropTypes.bool,
};

export default Profile;
