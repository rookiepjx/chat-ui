import styled from "styled-components";

const StyledChatApp = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

const Nav = styled.nav``;

const SideBar = styled.aside`
	max-width: 460px;
	min-width: 420px;
	height: 100vh;
`;

const Content = styled.div``;

const Drawer = styled.div``;

export default StyledChatApp;
export { Nav, SideBar, Content, Drawer };
