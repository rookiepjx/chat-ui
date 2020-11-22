import styled, { css } from "styled-components";

// css代码复用函数
const AvatarMixinFunc = (color,iconSize = "8px") => css`
	content: "";
	display: block;
	position: absolute;
	width: ${iconSize};
	height: ${iconSize};
	border-radius: 50%;
	background-color: ${color};
`;

// 头像容器
export const StyledAvatar = styled.div`
	position: relative;
`;

// 头像蒙版
export const AvatarClip = styled.div`
	width: ${(props) => props.size};
	height: ${(props) => props.size};
	border-radius: 50%;
	overflow: hidden;
`;

// 头像图片
export const AvatarImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	object-position: center;
`;

// 头像状态图标
export const StatusIcon = styled.div`
	position: absolute;
	top: 2px;
	left: 2px;

	/* 外圈 */
	&::before {
		${({iconSize}) => AvatarMixinFunc("white",iconSize)}
		transform: scale(2);
	}

	/* 内圈 */
	&::after {
		${({theme,status,iconSize}) => {
      if(status === "online") {
        return AvatarMixinFunc(theme.green,iconSize)
      } else {
        return AvatarMixinFunc(theme.gray,iconSize);
      }
    }}
	}
`;
