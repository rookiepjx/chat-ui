import styled, { css } from "styled-components";

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

	z-index: 100;
`;

const SideBar = styled.aside`
	position: relative;
	max-width: 460px;
	min-width: 420px;
	height: 100vh;
	flex: 1;
	> div {
		will-change: transform, opacity;
		position: absolute;
		width: 100%;
	}
`;

const Content = styled.div`
	position: relative;
	flex: 2;
`;

const Drawer = styled.div`
	width: 0;
	max-width: 310px;
	transform:translate3d(310px,0,0);
	transition:1s;
	opacity:0;
	// 提升性能
	will-change:width transform;

	${({ show }) =>
		show &&
		css`
			width: inherit;
			transform:translate3d(0,0,0);
			opacity:1;
		`}
`;

export default StyledChatApp;
export { Nav, SideBar, Content, Drawer };
