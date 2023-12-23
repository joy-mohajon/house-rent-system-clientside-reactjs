// MyContext.js
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const SearchContextProvider = ({ children }) => {
  // Basic information
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [availableFrom, setAvailableFrom] = useState("");
  const [rent, setRent] = useState(null);

  // location information
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  return (
    <MyContext.Provider
      value={{
        category,
        setCategory,
        propertyType,
        setPropertyType,
        availableFrom,
        setAvailableFrom,
        rent,
        setRent,
        division,
        setDivision,
        district,
        setDistrict,
        thana,
        setThana,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export const useSearchContext = () => useContext(MyContext);
