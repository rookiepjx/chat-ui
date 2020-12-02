import styled from "styled-components";

const StyledCheckboxSwitch = styled.label`
	position: relative;
	display: inline-block;
	width: 48px;
	height: 24px;
	cursor: pointer;
`;

const Slider = styled.span`
	background-color: ${({ theme }) => theme.gray4};
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	border-radius: 100px;
	/* 圆形按钮 */
	&:active::after {
		width: 22px;
	}


	&::after {
		content: "";
		display: block;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: #fff;
		position: absolute;
		top: 2px;
		left: 2px;
		box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.05), 0px 2px 2px rgba(0, 0, 0, 0.1),
			0px 3px 1px rgba(0, 0, 0, 0.0510643);
		transition: 0.4s;
	}
`;

const Checkbox = styled.input.attrs({ type: "checkbox" })`
	width: 0;
	height: 0;
	opacity: 0;
	:checked + ${Slider} {
		background-color: ${({ theme }) => theme.primaryColor};
    &:active::after{
      left:24px;
      width:22px;
    }
		&::after {
			/* transform: translateX(24px); */
      left:26px;
		}
	}
`;
export default StyledCheckboxSwitch;
export { Slider, Checkbox };
