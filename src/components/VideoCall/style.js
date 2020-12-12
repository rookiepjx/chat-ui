import styled from "styled-components";
import Button from "components/Button";
import Avatar from "components/Avatar";
import { card } from "utils/mixins";

const StyledVideoCall = styled.div`
	height: 100vh;
	padding: 20px;
	background-image: url(${({ src }) => src});
	background-size: cover;
	background-position: center;

	display: grid;
	grid-template-areas:
		"title title"
		"actions self";
`;

const Minimize = styled(Button)`
	width: 62px;
	height: 62px;
	font-size: 46px;
	grid-area: title;
	justify-self: end;
	padding: 0;
	background-color: ${({ theme }) => theme.gray3};
	color: #fff;
`;

const ButtonGroups = styled.div`
	grid-area: actions / title;
	justify-self: center;
	align-self: end;
	padding-bottom: 40px;

	display: grid;
	grid-template-columns: 90px 90px 90px;
`;

const Operation = styled(Button).attrs({ size: "64px", shape: "circle" })`
	font-size: 32px;
	color: #fff;
	justify-self: center;

	background-color: ${({ theme, type }) =>
		type === "hangoff" ? theme.red2 : theme.grayDark2};
`;

const Self = styled(Avatar)`
	grid-area: self;
	justify-self: end;
	align-self: end;
`;

const MinimizeScreen = styled.div`
	${card()};
	position: absolute;
	right: 0;
	top: 10vh;
  width:max-content;
	display: grid;
	grid-template-areas:
		"avatar info info"
		"avatar action icon";
	row-gap: 5px;
	column-gap: 10px;
	align-items: center;
	border: 1px solid ${({ theme }) => theme.gray4};
  z-index:100;
`;

export default StyledVideoCall;
export { ButtonGroups, Operation, Self, Minimize, MinimizeScreen };
