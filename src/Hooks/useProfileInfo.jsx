import { useState, useEffect } from "react";

const useProfileInfo = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getToken = () => {
    return localStorage.getItem("firebase-token");
  };

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        setIsLoading(true);
        const token = getToken();
        if (!token) {
          // Handle the case where there's no token (user is not authenticated)
          console.error("No token found. User is not authenticated.");
          return;
        }

        // console.log("admin token", token);

        const response = await fetch("http://localhost:5000/users/profile", {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          console.log("admin profile data: ", userData);
          setUserInfo(userData);
        } else {
          console.error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  return { userInfo, isLoading };
};

export default useProfileInfo;
