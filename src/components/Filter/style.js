import styled from "styled-components";

const Filters = styled.div`
>span{
  padding-right:1rem;
}
`;
const Actions = styled.div`
	justify-self: end;
	>*{
		padding-right: 1rem;
	}
`;
const StyledFilter = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	align-items: center;
`;

export default StyledFilter;
export { Filters, Actions };
