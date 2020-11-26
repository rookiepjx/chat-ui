import styled from "styled-components";

const StyledIcon = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	svg,
	svg * {
		fill: ${({ color }) => (color ? color : "")};
		opacity: ${({ opacity }) => (opacity ? opacity : "")};
	}
`;
export default StyledIcon;
