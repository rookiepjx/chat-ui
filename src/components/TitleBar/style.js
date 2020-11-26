import styled from "styled-components";
import StyledIcon  from "components/Icon/style";

const Title = styled.div`
	display: grid;
	row-gap: 6px;
`;

const Actions = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	${StyledIcon} {
		&:hover {
			path {
				fill: black;
				opacity: 1;
			}
		}
	}
`;

const StyledTitleBar = styled.div`
	display: grid;
	grid-template-columns: 62px 1fr 112px;
	padding: 30px;
	border-bottom: 1px solid ${({ theme }) => theme.gray4};
	max-height: 110px;
`;

export default StyledTitleBar;
export { Title, Actions };
