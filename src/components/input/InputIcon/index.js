import React from "react";
import PropTypes from "prop-types";
import StyledInputIcon from "./style";
import {InputUnderline} from "../InputText/style"
import Icon from "components/Icon";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function InputIcon({children,icon,...props}) {
  return (
		<StyledInputIcon {...props}>
			<Icon icon={faGithub} />
			<InputUnderline />
		</StyledInputIcon>
	);
}

InputIcon.propTypes = {
  children: PropTypes.any,
  icon:PropTypes.any
};

export default InputIcon;
