import styled from "styled-components";
import Paragraph from "components/Paragraph";
import Icon from "components/Icon";
import Heading from "components/Heading";
import Popover from "components/Popover";
import { card } from "utils/mixins";

const StyledFileCard = styled.div`
	${card()};
	display: grid;
	grid-template-areas:
		"icon name options"
		"icon size time";
	grid-template-columns: 74px 1fr 1fr;
	align-items: center;
`;

const FileIcon = styled(Icon).attrs({ width: 60, height: 60 })`
	grid-area: icon;
	justify-self: start;
`;

const FileName = styled(Heading).attrs({ level: 2 })`
	grid-area: name;
	align-self: center;
`;

const FileSize = styled(Paragraph).attrs({ type: "secondary" })`
	grid-area: size;
`;

const FileTime = styled(Paragraph).attrs({ type: "secondary" })`
	grid-area: time;
	justify-self: end;
`;

const FileOptions = styled(Popover).attrs({offset:{y:"10px"}})`
	grid-area: options;
	justify-self: end;
	align-self: center;
`;

const OptionsContentWrapper = styled.div`
	display: flex;
  justify-content:center;
  width:80px;
	& > * {
		margin: 0 4px;
    cursor:pointer;
	}
`;

export default StyledFileCard;
export {
	FileIcon,
	FileName,
	FileSize,
	FileTime,
	FileOptions,
	OptionsContentWrapper,
};
