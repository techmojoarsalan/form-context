import React from "react";
import { AppContext } from "./AppContextApi";
import { useContext } from "react";
function Profile() {
  const { username } = useContext(AppContext);
  return (
    <div>
      Profile
      <h4>username : {username}</h4>
    </div>
  );
}

export default Profile;
