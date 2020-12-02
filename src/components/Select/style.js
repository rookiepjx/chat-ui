import styled, { css } from "styled-components";
import CaretDown from "assets/icon/caret_down.svg";
import CaretDown2 from "assets/icon/caretDown2.svg";

const typeVariants = {
	form: css`
		background-image: url(${CaretDown2});
	`,
};

const StyledSelect = styled.select`
	/* 除去默认下拉图标 */
	appearance: none;
	::-ms-expand {
		display: none;
	}
	background-image: url(${CaretDown});
	background-position: right center;
	background-repeat: no-repeat;
	background-color: transparent;
	padding-right: 16px;
	border: none;
	font-size: ${({ theme }) => theme.normal};
	color: ${({ theme }) => theme.grayDark};
	${({ type }) => type && typeVariants[type]}
`;

export default StyledSelect;
