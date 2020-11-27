import styled from "styled-components";

const StyledPopover = styled.div`
	position: relative;
  display:flex;
  justify-content:center;
`;

const Content = styled.div`
	position: absolute;
	box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.12);
	padding: 12px 30px;
  border-radius:100px;
  bottom:calc(100% + 12px);
  ${({visible}) => !visible && `display:none`};
  ${({offset}) => offset && `transform:translate(${offset.x || 0},${offset.y || 0})`}
`;

const Triangle = styled.div`
	position: absolute;
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 6px 6px 0 6px;
	border-color: ${({ theme }) => theme.white} transparent transparent
		transparent;
	bottom: calc(100% + 12px - 6px);
	left: calc(50% - 6px);
	${({ visible }) => !visible && `display:none`};
	${({ offset }) =>
		offset && `transform:translateY(${offset.y || 0})`}
`;

const Target = styled.div``;

export default StyledPopover;
export { Content, Triangle, Target };
