import styled from "styled-components";
import StyledMessageCard from "components/MessageCard/style"
import StyledFilter from "components/Filter/style";

const StyledMessageList = styled.div`
${StyledFilter}{
  padding:20px;
}

`;
const ListContainer = styled.div`
  ${StyledMessageCard}{
    margin-bottom:4px;
  }
`;

export default StyledMessageList;
export {ListContainer}

