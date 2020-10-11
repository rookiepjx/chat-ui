import React from "react";
import PropTypes from "prop-types";

import { AvatarWrapper, AvatarClip, AvatarImage, StatusIcon } from "./style";

function Avatar({src,size = "48px",status,iconSize = "8px",...props}) {
	return (
		<AvatarWrapper {...props}>
			{status && <StatusIcon status={status} iconSize={iconSize}/>}
			<AvatarClip size={size}>
				<AvatarImage src={src}/>
			</AvatarClip>
		</AvatarWrapper>
	);
}

// 传递属性类型验证
Avatar.propTypes = {
  src:PropTypes.string.isRequired,
  size:PropTypes.string,
  status:PropTypes.oneOf(['online','offline']),
  iconSize:PropTypes.string
};

export default Avatar;
