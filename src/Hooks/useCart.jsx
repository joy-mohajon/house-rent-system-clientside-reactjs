import React, { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../pages/Auth/useAuth/useAuth";

const useCart = () => {
   const {user, loading} = useAuth();
  const [cart, setCart] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [reset, setReset] = useState(false);

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

        const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
          method: "GET",
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const cartData = await response.json();
          //   console.log("admin profile data: ", cartData);
          setCart(cartData);
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
  }, [reset]);

  return { cart, isLoading, reset, setReset };
};

export default useCart;
