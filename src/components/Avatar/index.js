import React from "react";
import PropTypes from "prop-types";

import StyledAvatar, {AvatarClip, AvatarImage, StatusIcon } from "./style";
import face from "assets/images/face-male-1.jpg";

function Avatar({src=face,size = "48px",status="online",iconSize = "8px",...props}) {
	return (
		<StyledAvatar {...props}>
			{status && <StatusIcon status={status} iconSize={iconSize}/>}
			<AvatarClip size={size}>
				<AvatarImage src={src}/>
			</AvatarClip>
		</StyledAvatar>
	);
}

// 传递属性类型验证
Avatar.propTypes = {
  src:PropTypes.string,
  size:PropTypes.string,
  status:PropTypes.oneOf(['online','offline']),
  iconSize:PropTypes.string
};

export default Avatar;
