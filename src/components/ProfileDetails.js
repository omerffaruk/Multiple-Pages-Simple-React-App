import React from "react";
import { useParams } from "react-router-dom";
import userProfiles from "../profileData";
export default function ProfileDetails() {
  const { userid } = useParams();
  const currentUser = userProfiles.find((user) => +user.id === +userid);

  return (
    <div>
      <h1>{currentUser.name}'s projects</h1>
      <ul>
        {currentUser.projects.map((project, index) => (
          <li key={`currentUser.name${index}`}>{project}</li>
        ))}
      </ul>
    </div>
  );
}
