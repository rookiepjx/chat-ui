import styled, { css } from "styled-components";

import { circle } from "utils/mixins";

// dot 右上角显示小圆点
// default圆点数字
const variants = {
	dot: css`
		position: relative;
		padding: 5px;
		&::after {
			display: ${({ show }) => (show ? "block" : "none")};
			content: "";
			${({ bgc }) => circle(bgc, "8px")};
			position: absolute;
			top: 4px;
			right: 0;
		}
	`,
	default: css`
		display: flex;
		align-items: center;
		justify-content: center;
		${({ bgc,size }) => {
			if(size === "normal") {
				return circle(bgc, "36px");
			} else if(size === "mini") {
				return circle(bgc, "24px");
			} else {
				return circle(bgc, "48px");
			}
		}};
		box-shadow: 0px 18px 40px 0px rgba(0, 0, 0, 0.04),
			0px 6px 12px 0px rgba(0, 0, 0, 0.08);
		${({ showZero, count }) => !showZero && count === 0 && `visibility: hidden`}
	`,
};

const StyledBadge = styled.div`
	display: inline-block;
	${({ variant }) => variants[variant]}
`;

export const Count = styled.div`
	font-size: ${({ theme }) => theme.normal};
	color: #fff;
`;

export default StyledBadge
