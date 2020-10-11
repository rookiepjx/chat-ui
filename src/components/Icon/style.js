import styled from "styled-components";

export const IconWrapper = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;

	svg,
	svg * {
    fill:${({color}) => (color ? color : "")};
    opacity:${({opacity}) => (opacity ? opacity : "")}
		/* ${({ color }) => (color ? `fill: ${color}` : "")};
		${({ opacity }) => (opacity ? `opacity:${opacity}` : "")}; */
	}
`;
