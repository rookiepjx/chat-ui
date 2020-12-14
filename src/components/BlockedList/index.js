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
import Text from "components/Text";
import Icon from "components/Icon";

import { ReactComponent as ArrowMenuLeft } from "assets/icon/arrowMenuLeft.svg";
import { ReactComponent as closeCircle } from "assets/icon/closeCircle.svg";
import face from "assets/images/face-male-1.jpg";
import { useHistory } from "react-router-dom";
import { useSpring, animated } from "react-spring";

function BlockedList({ children, ...props }) {
	const history = useHistory();
	const animationProps = useSpring({
		opacity: 1,
		transform: "translate3d(0,0,0)",
		from: { opacity: 0, transform: "translate3d(0,100px,0)" },
		config: { tension: 180 },
		delay: 200,
	});
	return (
		<StyledBlockedList {...props}>
			<animated.div style={animationProps}>
				<BlockedTitle>
					<Icon
						icon={ArrowMenuLeft}
						style={{ cursor: "pointer" }}
						onClick={() => history && history.goBack()}
					/>
					<Text size="xlarge">已屏蔽好友列表</Text>
				</BlockedTitle>
				<FriendsList>
					{new Array(8).fill(0).map((user, index) => {
						return (
							<FriendItem key={index}>
								<BlockedAvatar size="100px" src={face} />
								<BlockedName>李明</BlockedName>
								<CloseIcon width={50} height={50} icon={closeCircle} />
							</FriendItem>
						);
					})}
				</FriendsList>
			</animated.div>
		</StyledBlockedList>
	);
}

BlockedList.propTypes = {
	children: PropTypes.any,
};

export default BlockedList;
