import styled from "styled-components";

const StyledSeparator = styled.div`
	width: 100%;
	height: 1px;
	border-bottom: 1px solid ${({ theme }) => theme.gray};
`;

export default StyledSeparator;
