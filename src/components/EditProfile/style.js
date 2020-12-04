import styled from "styled-components";
import Text from "components/Text/style";

const StyledEditProfile = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	row-gap: 20px;
	padding: 50px;
	max-height: 100vh;
	overflow: auto;
	margin-top: 2vh;
	border: 1px solid ${({ theme }) => theme.gray};
`;

const GroupTitle = styled(Text).attrs({ size: "large" })``;

const GenderAndRegion = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	justify-items: space-between;
`;

const SelectGroup = styled.div`
	& > * {
		margin: 0 4px;
	}
`;

const StyledIconInput = styled.div`
	display: grid;
	grid-template-columns: 38px 1fr;
  align-items:end;
  padding-bottom:20px;
`;

export default StyledEditProfile;
export { GroupTitle, GenderAndRegion, SelectGroup, StyledIconInput };
