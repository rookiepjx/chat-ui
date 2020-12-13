import { css } from "styled-components";

// 圆角效果
export const circle = (color = "#F34848", size = "8px") => css`
	width: ${size};
	height: ${size};
	border-radius: 50%;
	background-color: ${color};
`;

// Navbar侧边栏渐变效果
export const activeBar = ({
					barWidth = "8px",
					shadowWidth = "20px",
				} = {}) => css`
					position: relative;
					&::before,
					&::after {
						position: absolute;
						display: block;
						content: "";
						height: 100%;
						left: 0;
						transition: .4s cubic-bezier(0.16, 1, 0.3, 1);
					}
					&::before {
						width: ${barWidth};
						background: linear-gradient(
							180deg,
							rgba(142, 197, 242, 1) 0%,
							rgba(79, 157, 222, 1) 100%
						);
					}
					&::after {
						width: ${shadowWidth};
						background: linear-gradient(
							270deg,
							rgba(41, 47, 76, 1) 0%,
							rgba(142, 197, 242, 1) 100%
						);
						opacity: 0.7;
					}
				`;

// 卡片轮廓阴影
export const card = (radius="6px",padding="20px 30px") => css`
	padding:${padding};
	background:${({theme}) => theme.white};
	box-shadow:0 18px 40px 0 rgba(0,0,0,.04);
	border-radius:${radius};
`