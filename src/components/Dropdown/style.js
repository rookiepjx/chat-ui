import styled from "styled-components";
import StyledSeparator from "components/Separator/style"

const StyledDropdown = styled.div`
	position: relative;
	cursor: pointer;
	z-index:100;
`;

const DropdownContainer = styled.div`
	position: absolute;
	top: calc(100% + 10px);
	padding: 4px 26px;
	box-shadow: 0px 4px 32px rgba(0, 0, 0, 0.08);
	${({ align }) => align}:0;
	display: ${({ visible }) => (visible ? "block" : "none")};
	background: white;
	white-space: nowrap;

  ${StyledSeparator}{
    width:calc(100% + 52px);
    margin:-3px -26px;
  }
`;

const DropdownItem = styled.div`
	margin: 10px 0;
`;

export default StyledDropdown;
export { DropdownContainer, DropdownItem };
