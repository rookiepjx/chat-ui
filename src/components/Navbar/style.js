import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  StyledAvatar  from "components/Avatar/style";
import  StyledBadge from "components/Badge/style";
import styled from "styled-components";
import { activeBar } from "utils/mixins";

export const MenuIcon = styled(FontAwesomeIcon)`
	color: white;
	font-size: 24px;
	opacity: ${({ active }) => (active ? 1 : 0.3)};
`;

export const StyledMenuItem = styled.div`
					& > a {
						width: 100%;
						height: 74px;
						display: flex;
						justify-content: center;
						align-items: center;
						${activeBar()};
						${({ active }) => (active ? "" : `&::before,&::after{height:0}`)};
						&:hover {
							${activeBar()};
							${StyledBadge} {
								${MenuIcon} {
									opacity: 1;
								}
							}
						}
					}
				`;

export const StyledNavbar = styled.nav`
	display: grid;
	grid-template-rows: 1fr 4fr;
	width: 100px;
	height: 100vh;
	background-color: ${({ theme }) => theme.darkPurple};
	padding: 30px 0;
	${StyledAvatar} {
		justify-self: center;
	}
`;

export const StyledMenuItems = styled.div`
	display: grid;
	grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;
