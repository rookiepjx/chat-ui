import React,{useState} from "react";
import PropTypes from "prop-types";
// import StyledEditProfile from "./style";
import Profile from "components/Profile"

function EditProfile({children,onCloseClick,onEdit,...props}) {
  const [showClose, setShowClose] = useState(false);
  if (!showClose) {
		return (
			<Profile
				onEdit={() => setShowClose(true)}
        showEditBtn
        onCloseClick={onCloseClick}
				{...props}
			/>
		);
	}
  return (
		<Profile
			showEditBtn
			showClose
			onCloseClick={onCloseClick}
			onEdit={() => setShowClose(true)}
			{...props}
		/>
	);
}

EditProfile.propTypes = {
  children: PropTypes.any
};

export default EditProfile;
