import styled,{css} from "styled-components";

// label 当点击文字也可以触发radio
const StyledRadio = styled.label`
	position: relative;
	padding-left: 22px;
	display: inline-block;
	line-height: 18px;
	cursor: pointer;
	font-size: ${({ theme }) => theme.normal};
`;

const Circle = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 18px;
	height: 18px;
	border-radius: 50%;
	line-height: 18px;
	border: 1px solid ${({ theme }) => theme.primaryColor};
	&::after {
		content: "";
		position: absolute;
		width: 10px;
		height: 10px;
		top: 3px;
		left: 3px;
		border-radius: 50%;
		background-color: ${({ theme }) => theme.primaryColor};
		transform: scale(0);
		transition: 0.2s ease;
		opacity: 0;
	}
`;

const RadioButton = styled.input.attrs({ type: "radio" })`
  width:0;
  height:0;
	opacity:0;
	${({ checked }) =>
		checked &&
		css`
			 {
				${Circle}::after {
					transform: scale(1);
					opacity: 1;
				}
			}
		`}
  :checked + ${Circle}::after{
    transform:scale(1);
    opacity:1;
  }
  :not(:checked) + ${Circle}::after{
    transform:scale(0);
    opacity:0;
  }
`;

const StyledRadioGroup = styled.div`
	display: flex;
	& > *:not(:first-child) {
		margin-left: 24px;
	}
`;

export default StyledRadio;
export { Circle, RadioButton, StyledRadioGroup };
