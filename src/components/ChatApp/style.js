import styled from "styled-components";

const StyledChatApp = styled.div`
	position: relative;
	display: flex;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

const Nav = styled.nav`
	flex-shrink: 0;
	position: relative;
`;

const SideBar = styled.aside`
	position: relative;
	max-width: 460px;
	min-width: 420px;
	height: 100vh;
	flex: 1;
`;

const Content = styled.div`
	position: relative;
	flex: 2;
`;

const Drawer = styled.div`
	/* width: 0; */
	max-width: 310px;
`;

export default StyledChatApp;
export { Nav, SideBar, Content, Drawer };
