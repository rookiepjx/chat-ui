import React from "react";
import {
	MenuIcon,
	StyledNavbar,
	StyledMenuItem,
	StyledMenuItems,
} from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";

import image from "assets/images/face-male-1.jpg";
import {
	faCog,
	faCommentDots,
	faEllipsisH,
	faFolder,
	faStickyNote,
	faUser,
} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";
import { Link, useLocation, matchPath } from "react-router-dom";

function Navbar({ ...prop }) {
	return (
		<StyledNavbar {...prop}>
			<Avatar src={image} status="online" />
			<StyledMenuItems>
				<MenuItem to="/" showBadge icon={faCommentDots} />
				<MenuItem to="/contacts" icon={faUser} />
				<MenuItem to="/files" icon={faFolder} />
				<MenuItem to="/notes" icon={faStickyNote} />
				<MenuItem icon={faEllipsisH} />
				<MenuItem
					to="/setting"
					icon={faCog}
					css={`
						align-self: end;
					`}
				/>
			</StyledMenuItems>
		</StyledNavbar>
	);
}

// 菜单项只属于侧导航，所以和Navbar写在一起
function MenuItem({ icon, to, showBadge, ...prop }) {
	// 获取路由信息
	const location = useLocation();
	const active = !!matchPath(location && location.pathname, {
		path: to,
		exact: to === "/",
	});
	return (
		<StyledMenuItem active={active} {...prop}>
			<Link to={to}>
				<Badge show={showBadge}>
					<MenuIcon active={active} icon={icon} />
				</Badge>
			</Link>
		</StyledMenuItem>
	);
}

export default Navbar;
export { MenuItem };
