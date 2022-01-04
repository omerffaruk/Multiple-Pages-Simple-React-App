import React from "react";
import { useParams } from "react-router-dom";
import userProfiles from "../profileData";
export default function ProfileDetails() {
  const { username } = useParams();
  const currentUser = userProfiles.find((user) => +user.id === +username);

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
