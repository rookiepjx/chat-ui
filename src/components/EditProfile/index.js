import React, { useState } from "react";
import PropTypes from "prop-types";
import StyledEditProfile, {
	GroupTitle,
	GenderAndRegion,
	SelectGroup,
	StyledIconInput,
} from "./style";
import Profile from "components/Profile";
import Avatar from "components/Avatar";
import Button from "components/Button";
import Input from "components/Input";
import Radio from "components/Radio";
import Option from "components/Option";
import Select from "components/Select";
import LabelContainer from "components/LabelContainer";

import "styled-components/macro";
import { useTheme } from "styled-components";

import face from "assets/images/face-male-1.jpg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faWeibo,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "components/Icon";

function EditProfile({ children, onCloseClick, onEdit, ...props }) {
	const [showEdit, setShowEdit] = useState(false);
	const theme = useTheme();
	if (!showEdit) {
		return (
			<Profile
				onEdit={() => setShowEdit(true)}
				showEditBtn
				onCloseClick={onCloseClick}
				{...props}
			/>
		);
	}
	return (
		<StyledEditProfile {...props}>
			<Avatar
				src={face}
				size="160px"
				css={`
					grid-area: 1 / 1 / 2 / 2;
					justify-self: center;
					margin-bottom: 20px;
				`}
			/>
			<Button
				shape="circle"
				size="52px"
				bgColor={theme.primaryColor}
				onClick={() => setShowEdit(false)}
				css={`
					grid-area: 1 / 1 / 3 / 2;
					justify-self: center;
					align-self: end;
					position: relative;
					left: 60px;
					bottom: 20px;
				`}
			>
				<FontAwesomeIcon icon={faCheck} color="#fff" />
			</Button>
			<GroupTitle>基本信息</GroupTitle>
			<Input.Text label="昵称" />
			<GenderAndRegion>
				<Radio.Group label="性别">
					<Radio name="gender">男</Radio>
					<Radio name="gender">女</Radio>
				</Radio.Group>
				<LabelContainer label="地区">
					<SelectGroup>
						<Select type="form">
							<Option>省份</Option>
						</Select>
						<Select type="form">
							<Option>城市</Option>
						</Select>
						<Select type="form">
							<Option>区县</Option>
						</Select>
					</SelectGroup>
				</LabelContainer>
			</GenderAndRegion>
			<Input.Text label="个性签名" />
			<GroupTitle>联系信息</GroupTitle>
			<Input.Text label="联系电话" />
			<Input.Text label="电子邮箱" />
			<Input.Text label="个人网站" />
			<GroupTitle>社交信息</GroupTitle>
			<IconInput icon={faWeibo} bgColor="#F06767" />
			<IconInput icon={faGithub} bgColor="black" />
			<IconInput icon={faLinkedin} bgColor="#2483C0" />
		</StyledEditProfile>
	);
}

function IconInput({ icon, bgColor, children, ...props }) {
	return (
		<StyledIconInput>
			<Icon.Social icon={icon} bgColor={bgColor} />
			<Input.Text {...props} />
		</StyledIconInput>
	);
}

EditProfile.propTypes = {
	children: PropTypes.any,
};

export default EditProfile;
