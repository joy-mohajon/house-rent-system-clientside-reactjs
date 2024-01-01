import React, { useEffect, useState } from "react";
import ProfileDetails from "../../../../components/Profile/ProfileDetails/ProfileDetails";
import Spinner from "../../../../components/Spinner/Spinner";
import useProfileInfo from "../../../../Hooks/useProfileInfo";

const AdminHome = () => {
  const {userInfo} = useProfileInfo();

  return userInfo ? <ProfileDetails userDetails={userInfo} /> : <Spinner />;
};

export default AdminHome;
