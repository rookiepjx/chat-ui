import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { activeBar } from "utils/mixins";

export const StyledMenuItem = styled.div`
	& > a {
		width: 100%;
		height: 74px;
		display: flex;
		justify-content: center;
		align-items: center;
		${activeBar()};
		${({ active }) => (active ? "" : `&::before,&::after{height:0}`)}
	}
`;

export const MenuIcon = styled(FontAwesomeIcon)`
	color: #fff;
	font-size: 24px;
	opacity: ${({ active }) => (active ? 1 : 0.3)};
`;

export const NavbarWrapper = styled.div``;
