import styled, { css } from "styled-components";

const StyledSwitch = styled.div`
	position: relative;
	width: 48px;
	height: 24px;
	border-radius: 100px;
	background: ${({ theme }) => theme.gray4};
	${({ active }) =>
		active &&
		css`
			background: ${({ theme }) => theme.blue};
		`}
`;

const SwitchButton = styled.button`
	position: absolute;
	left: 2px;
	top: 2px;
	width: 20px;
	height: 20px;
	border: none;
	border-radius: 50%;
	background: #fff;
	box-shadow: 0 2px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: all linear .2s;
	${({ active }) =>
		!active &&
    css`
			left: 26px;
      &:active{
       left:22px;
      }
		`};
    &:active{
      width:24px;
    }
`;

export default StyledSwitch;
export { SwitchButton };
