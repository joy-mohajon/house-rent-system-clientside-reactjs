import React, { useEffect, useState } from "react";
import ProfileDetails from "../../../../components/Profile/ProfileDetails/ProfileDetails";
import Spinner from "../../../../components/Spinner/Spinner";
import useProfileInfo from "../../../../Hooks/useProfileInfo";
import { Link } from "react-router-dom";
import ArticleIcon from '@mui/icons-material/Article';

const AdminHome = () => {
  const {userInfo} = useProfileInfo();

  return userInfo ? <div>
    <ProfileDetails userDetails={userInfo} > </ProfileDetails>
    <Link to={`/dashboard/admin-profile/update/${userInfo._id}`}>
          <button variant="contained" className="px-3 text-white btn btn-outline-primary active" >
                <small className="d-flex"> <ArticleIcon /> Edit </small> 
          </button>
    </Link>
  </div>  : <Spinner />;
};

export default AdminHome;
