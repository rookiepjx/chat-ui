import styled from "styled-components";
import StyledMessageCard from "components/MessageCard/style";

const StyledMessageList = styled.div``;
const ListContainer = styled.div`
	${StyledMessageCard} {
		margin-bottom: 4px;
	}
`;

export default StyledMessageList;
export { ListContainer };
