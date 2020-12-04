import styled from "styled-components";
import StyledText from "components/Text/style";
import Avatar from "components/Avatar";
import Text from "components/Text";
import Icon from "components/Icon";

const StyledBlockedList = styled.div``;

const BlockedTitle = styled.div`
	height: 148px;
	display: grid;
	align-items: center;
	grid-template-columns: 10px 1fr;
	${StyledText} {
		grid-column: span 1/-1;
		justify-self: center;
	}
`;

const FriendsList = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	justify-items: center;
	row-gap: 20px;
`;

const FriendItem = styled.div`
	display: grid;
	grid-template-areas:
		"avatar avatar avatar"
		"avatar avatar avatar"
		"avatar avatar avatar"
		"name name name";
	justify-items: center;
`;

const BlockedAvatar = styled(Avatar)`
	grid-area: avatar;
`;

const BlockedName = styled(Text).attrs({ size: "xlarge" })`
	grid-area: name;
	margin-top: 10px;
`;

const CloseIcon = styled(Icon)`
  grid-area: 2 / 3 / 5 / 4;
  z-index:10;
  margin-top:16px;
`;

export default StyledBlockedList;
export {
	BlockedTitle,
	FriendsList,
	FriendItem,
	BlockedAvatar,
	BlockedName,
	CloseIcon,
};
