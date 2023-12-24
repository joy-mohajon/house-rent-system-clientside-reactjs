import React, { useEffect, useState } from "react";
import Board from "../../components/Board/Board";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSearchContext } from "../../contexts/SearchContextProvider";
import useRent from "../../Hooks/useRent";
import { useLocation } from "react-router";

const Dashboard = () => {
  const location = useLocation();
  const { homeCategory, homePropertyType, homeDivision } = location.state || "";

  const [houses, loading, refetch] = useRent();
  const [isLoading, setIsLoading] = useState(loading || false);
  const [filteredHouse, setFilteredHouse] = useState([]);

  // Use the custom hook to get the context value
  const {
    category,
    setCategory,
    propertyType,
    setPropertyType,
    availableFrom,
    rent,
    division,
    setDivision,
    district,
    thana,
  } = useSearchContext();

  console.log("Setting rent price", rent);

  useEffect(() => {
    // Update 'category' state if 'homeCategory' is defined
    if (homeCategory !== undefined && homeCategory !== null) {
      setCategory(homeCategory);
    }

    // Update 'propertyType' state if 'homePropertyType' is defined
    if (homePropertyType !== undefined && homePropertyType !== null) {
      setPropertyType(homePropertyType);
    }

    // Update 'division' state if 'homeDivision' is defined
    if (homeDivision !== undefined && homeDivision !== null) {
      setDivision(homeDivision);
    }
  }, [homeCategory, homeDivision, homePropertyType]);

  useEffect(() => {
    const filterHouses = () => {
      return houses?.filter((house) => {
        return (
          // Basic information filters
          (category === "" ||
            house.category.toLowerCase() === category.toLowerCase()) &&
          (propertyType === "" ||
            house.propertytype.toLowerCase() === propertyType.toLowerCase()) &&
          (availableFrom === "" ||
            house.availablefrom.toLowerCase() ===
              availableFrom.toLowerCase()) &&
          (rent === null || house.rent <= rent) &&
          // Location information filters
          (division === "" ||
            house.division.toLowerCase() === division.toLowerCase()) &&
          (district === "" ||
            house.district.toLowerCase() === district.toLowerCase()) &&
          (thana === "" || house.thana.toLowerCase() === thana.toLowerCase())
        );
      });
    };

    setIsLoading(true);
    const filteredHouses = filterHouses();
    setFilteredHouse(filteredHouses);
    setIsLoading(false);
  }, [
    availableFrom,
    category,
    district,
    division,
    houses,
    propertyType,
    rent,
    thana,
  ]);

  return (
    <div className="w-100 d-flex align-items-stretch">
      <Sidebar />
      <Board houses={filteredHouse} isLoading={isLoading} />
    </div>
  );
};

export default Dashboard;
