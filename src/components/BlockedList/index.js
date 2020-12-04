import React from "react";
import PropTypes from "prop-types";
import StyledBlockedList, {
	BlockedTitle,
	FriendsList,
	FriendItem,
	BlockedAvatar,
	BlockedName,
	CloseIcon,
} from "./style";
import Text from "components/Text"
import Icon from "components/Icon";

import { ReactComponent as ArrowMenuLeft } from "assets/icon/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "assets/icon/closeCircle.svg";
import face from "assets/images/face-male-1.jpg"

function BlockedList({children,...props}) {
  return (
		<StyledBlockedList {...props}>
			<BlockedTitle>
				<Icon icon={ArrowMenuLeft} style={{cursor:"pointer"}} />
				<Text size="xlarge">已屏蔽好友列表</Text>
			</BlockedTitle>
      <FriendsList>
        {new Array(8).fill(0).map((user,index)=> {
          return (
            <FriendItem>
              <BlockedAvatar size="100px" src={face}/>
              <BlockedName>李明</BlockedName>
              <CloseIcon width={50} height={50} icon={closeCircle} />
            </FriendItem>
          )
        })}
      </FriendsList>
		</StyledBlockedList>
	);
}

BlockedList.propTypes = {
  children: PropTypes.any
};

export default BlockedList;
