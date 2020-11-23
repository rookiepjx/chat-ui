import styled, { css } from "styled-components";

// 根据type属性渲染不同颜色
const typeVariants = {
	primary: css`
		color: ${({ theme }) => theme.grayDark};
	`,
	secondary: css`
		color: ${({ theme }) => theme.grayDark};
		opacity: 0.3;
	`,
	danger: css`
		color: ${({ theme }) => theme.red};
	`,
};

// 根据size属性渲染不同大小
const sizeVariants = {
	normal: css`
		font-size: ${({ theme }) => theme.normal};
	`,
	medium: css`
		font-size: ${({ theme }) => theme.medium};
	`,
	xxsmall: css`
		font-size: ${({ theme }) => theme.xxsmall};
	`,
	xsmall: css`
		font-size: ${({ theme }) => theme.xsmall};
	`,
	small: css`
		font-size: ${({ theme }) => theme.small};
	`,
	large: css`
		font-size: ${({ theme }) => theme.large};
	`,
	xlarge: css`
		font-size: ${({ theme }) => theme.xlarge};
	`,
	xxlarge: css`
		font-size: ${({ theme }) => theme.xxlarge};
	`,
};

const StyledText = styled.span`
  ${({size}) => sizeVariants[size]}
  ${({type}) => typeVariants[type]}
  ${({bold}) => bold && `font-weight:600`}
`;

export default StyledText;

