import styled, { css } from "styled-components";

// 根据shape属性渲染不同性质
const shapeVariants = {
	rect: css`
		padding: 12px 18px;
		border-radius: 6px;
	`,
	circle: css`
		padding: 10px;
		width: ${({ size }) => size};
		height: ${({ size }) => size};
		border-radius: 50%;
		display: inline-flex;
		justify-content: center;
		align-items: center;
	`,
};

// 根据type属性渲染不同类型
const typeVariants = {
	primary: css`
		color: #fff;
		background-color: ${({ theme }) => theme.primaryColor};
	`,
	success: css`
		color: #fff;
		background-color: ${({ theme }) => theme.green};
	`,
	info: css`
		color: #fff;
		background-color: ${({ theme }) => theme.gray};
	`,
	danger: css`
		color: #fff;
		background-color: ${({ theme }) => theme.red};
	`,
	warn: css`
		color: #fff;
		background-color: ${({ theme }) => theme.orange};
	`,
};

const StyledButton = styled.button`
	border: none;
	cursor: pointer;
	background-color: ${({ bgColor }) => bgColor};
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	${({ shape }) => shapeVariants[shape]};
	${({ type }) => typeVariants[type]};
	transform: scale(1);
	transition: 0.4s;
	&:hover {
		transform: scale(1.1);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
	}
`;

export default StyledButton;
