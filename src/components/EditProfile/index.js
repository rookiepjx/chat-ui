import React,{useState} from "react";
import PropTypes from "prop-types";
// import StyledEditProfile from "./style";
import Profile from "components/Profile"

function EditProfile({children,...props}) {
  const [showEdit, setShowEdit] = useState(false);
  if(!showEdit){
    return (
			<Profile
				onEdit={() => setShowEdit(true)}
				showEditBtn
				showCloseIcon={false}
				{...props}
			/>
		);
  }
  return (
    <Profile showClose="false" showEditBtn onEdit={() => setShowEdit(true)}/>
  );
}

EditProfile.propTypes = {
  children: PropTypes.any
};

export default EditProfile;
