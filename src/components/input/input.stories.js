import { ReactComponent as clip} from "assets/icon/clip.svg";
import {ReactComponent as search} from "assets/icon/search.svg"
import Icon from "components/Icon";
import React from "react";
import Input from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
} from "@fortawesome/free-brands-svg-icons";

export default {
  title: "UI组件/Input",
  component: Input
};

export const Default = () => <Input/>;

export const Search = () => <Input.Search/>

export const WithPrefix = () => <Input prefix={<Icon icon={clip}/>} />

export const WithSuffix = () => <Input suffix={<Icon icon={search} />}/>;

export const InputText = () => <Input.Text label="昵称"/>;

export const InputIcon = () => (
					<Input.Icon>
						<FontAwesomeIcon style={{fontSize:"24px"}} icon={faGithub} />
					</Input.Icon>
				);
