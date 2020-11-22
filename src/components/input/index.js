import React from "react";
import PropTypes from "prop-types";
import StyledInput from "./style";
import Icon from "../Icon/index"
import { Prefix, Suffix, InputContainer } from "./style";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {ReactComponent as SearchIcon} from "assets/icon/search.svg"
import { useTheme } from "styled-components";

function Input({ placeholder = "请输入内容", prefix, suffix, ...props }) {
	return (
		<InputContainer {...props}>
			{prefix && <Prefix>{prefix}</Prefix>}
			<StyledInput placeholder={placeholder} />
			{suffix && <Suffix>{suffix}</Suffix>}
		</InputContainer>
	);
}

// input子组件搜索框
function Search({placeholder="请输入搜索内容",...props} = {}){
  const theme = useTheme()
  return (
		<Input
			{...props}
			placeholder={placeholder}
			prefix={
				<Icon
					icon={SearchIcon}
					color={theme.gray3}
					width="18"
					height="18"
				></Icon>
			}
		></Input>
	);
}

Input.Search = Search

Input.propTypes = {
  placeholder:PropTypes.string,
	prefix: PropTypes.any,
	suffix: PropTypes.any,
};

export default Input;
