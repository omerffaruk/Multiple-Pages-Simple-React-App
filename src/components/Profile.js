import React from "react";
import { Link } from "react-router-dom";
import userProfiles from "../profileData";
function Profile() {
  const ProfileLinks = userProfiles.map((user) => (
    <h3 key={user.id}>
      <Link to={`/profile/${user.id}`}>{user.name}'s profile</Link>
    </h3>
  ));
  return (
    <div>
      <h1>This is the profile page for </h1>
      {ProfileLinks}
    </div>
  );
}

export default Profile;
