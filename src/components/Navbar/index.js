import React from "react";
import PropTypes from "prop-types";
import {MenuIcon, NavbarWrapper, StyledMenuItem} from "./style";
import Badge from "components/Badge";

function Navbar({children,...prop}) {
  return (
    <NavbarWrapper {...prop}>
      {children}
    </NavbarWrapper>
  );
}

// 菜单项只属于侧导航，所以和Navbar写在一起
function MenuItem({icon,active,showBadge,...prop}){
  return (
		<StyledMenuItem active={active} {...prop}>
			<a href="/todo">
				<Badge showBadge={showBadge}>
					<MenuIcon active={active} icon={icon}/>
				</Badge>
			</a>
		</StyledMenuItem>
	);
}

Navbar.propTypes = {
  children: PropTypes.any
};

export default Navbar;
export {MenuItem}
