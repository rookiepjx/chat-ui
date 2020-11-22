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
import { faCog, faCommentDots, faEllipsisH, faFolder, faStickyNote, faUser } from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro";

function Navbar({...prop}) {
  return (
		<StyledNavbar {...prop}>
			<Avatar src={image} status="online" />
			<StyledMenuItems>
				<MenuItem active="true" showBadge icon={faCommentDots} />
				<MenuItem icon={faUser} />
				<MenuItem icon={faFolder} />
				<MenuItem icon={faStickyNote} />
				<MenuItem icon={faEllipsisH} />
				<MenuItem
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
function MenuItem({icon,active,showBadge,...prop}){
  return (
		<StyledMenuItem active={active} {...prop}>
			<a href="/">
				<Badge show={showBadge}>
					<MenuIcon active={active} icon={icon}/>
				</Badge>
			</a>
		</StyledMenuItem>
	);
}

export default Navbar;
export {MenuItem}
