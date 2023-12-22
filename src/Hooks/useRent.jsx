import React from "react";
import { useQuery } from "@tanstack/react-query";

const useRent = () => {
  const {
    data: houses = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/rent");
      return res.json();
    },
  });

  return [houses, loading, refetch];
};

export default useRent;
