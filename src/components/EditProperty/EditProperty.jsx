import React, { useEffect, useState } from "react";
import Progressbar from "../AddProperty/Progressbar/Progressbar";
import PropertyForm from "../AddProperty/PropertyForm/PropertyForm";
import { Box, Stack,selectClasses } from "@mui/joy";
import CustomSelect from "../CustomSelect/CustomSelect";
import {
  balconyOptions,
  bathroomOptions,
  bedroomOptions,
  categoryOptions,
  floorOptions,
  genderOptions,
  monthOptions,
  propertyTypeOptions,
} from "../../config/AddPropertyForm/SelectOptions";
import { divisionsData } from "../../config/AddPropertyForm/Divisions";
import CustomButton from "../CustomButton/CustomButton";
import Spinner from "../Spinner/Spinner";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomInput/CustomTextarea";

 



const EditProperty = ({currentStep}) => {
// Step 1: basic information
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [balcony, setBalcony] = useState("");
  const [floor, setFloor] = useState("");

  // Step 2: locational information
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [thana, setThana] = useState("");

  // Step 3: Additional infomation
  const [availableFrom, setAvailableFrom] = useState("");
  const [rent, setRent] = useState(null);
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [video, setVideo] = useState(null);
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [addBy, setAddBy] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  //selected districts, upazilas
  const [selectedDistrict, setSelectedDistrict] = useState([]);
  const [selectedUpazila, setSelectedUpazila] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  // Error messages
  const [errorMessages, setErrorMessages] = useState({
    category: "",
    propertyType: "",
    bedroom: "",
    bathroom: "",
    balcony: "",
    floorno: "",
    division: "",
    district: "",
    thana: "",
    availableFrom: "",
    rent: "",
    gender: "",
  });

  // Error messages
  useEffect(() => {
    setErrorMessages((prevErrors) => {
      let updatedErrors = { ...prevErrors };

      // Check and clear error messages based on state updates
      if (category !== "") updatedErrors.category = "";
      if (propertyType !== "") updatedErrors.propertyType = "";
      if (bedroom !== "") updatedErrors.bedroom = "";
      if (bathroom !== "") updatedErrors.bathroom = "";
      if (balcony !== "") updatedErrors.balcony = "";
      if (floor !== "") updatedErrors.floorno = "";
      if (division !== "") updatedErrors.division = "";
      if (district !== "") updatedErrors.district = "";
      if (thana !== "") updatedErrors.thana = "";
      if (availableFrom !== "") updatedErrors.availableFrom = "";
      if (rent !== null) updatedErrors.rent = "";
      if (gender !== "") updatedErrors.gender = "";
      if (addBy !== "") updatedErrors.addBy = "";
      if (email !== "") updatedErrors.email = "";
      if (phone !== "") updatedErrors.phone = "";

      return updatedErrors;
    });
  }, [
    category,
    propertyType,
    gender,
    bedroom,
    bathroom,
    balcony,
    floor,
    division,
    district,
    thana,
    availableFrom,
    rent,
    addBy,
    email,
    phone,
  ]);

  // Effects for dynamic dropdowns
  useEffect(() => {
    const selectedDis = divisionsData?.find(
      (divisionName) => divisionName.name === division
    )?.districts;

    if (selectedDis) {
      setSelectedDistrict(selectedDis);
      setDistrict(selectedDis[0]?.name);
    }
    const selectedUp = selectedDis?.find(
      (districtName) => districtName.name === selectedDis[0]?.name
    )?.upazilas;

    if (selectedUp) {
      setSelectedUpazila(selectedUp);
      setThana(selectedUp[0]);
    }
  }, [division]);

  useEffect(() => {
    const selectedUp = selectedDistrict?.find(
      (districtName) => districtName.name === district
    )?.upazilas;

    if (selectedUp) {
      setSelectedUpazila(selectedUp);
      setThana(selectedUp[0]);
    }
  }, [district]);
  



  return (
    <div>
      <Progressbar />
      {/* <PropertyForm /> */}
      <div>
        <form >
      {/* Step 1: Item Details  */}
      <div
        id="step1"
        className={`form-step ${currentStep === 1 ? "visible" : ""}`}
      >
        <h3 className="title">Basic information</h3>
        {/* announcement */}
        {/* <div className="form-group mb-2">
          <label htmlFor="inputName">Announcement:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Your Announcement"
          />
        </div> */}
        <Stack spacing={2}>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* category input field  */}
            <CustomSelect
              label="CATEGORY"
              
              setInputValue={(type) => setCategory(type)}
              options={categoryOptions}
              errorMessages={errorMessages.category}
              selectClasses={selectClasses}
            />

            {/* property input field  */}
            <CustomSelect
              label="PROPERTY TYPE"
              value={propertyType}
              setInputValue={(type) => setPropertyType(type)}
              options={propertyTypeOptions}
              errorMessages={errorMessages.propertyType}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* gender input field  */}
            <CustomSelect
              label="GENDER"
              value={gender}
              setInputValue={(type) => setGender(type)}
              options={genderOptions}
              errorMessages={errorMessages.gender}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* bedroom input field  */}
            <CustomSelect
              label="BEDROOM"
              value={bedroom}
              setInputValue={(type) => setBedroom(type)}
              options={bedroomOptions}
              errorMessages={errorMessages.bedroom}
              selectClasses={selectClasses}
            />

            {/* bathroom input field  */}
            <CustomSelect
              label="BATHROOM"
              options={bathroomOptions}
              value={bathroom}
              setInputValue={(type) => setBathroom(type)}
              errorMessages={errorMessages.bathroom}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column",
              "@media (min-width: 600px)": {
                flexDirection: "row",
              },
            }}
          >
            {/* balcony input field  */}
            <CustomSelect
              label="BALCONY"
              options={balconyOptions}
              value={balcony}
              setInputValue={(type) => setBalcony(type)}
              errorMessages={errorMessages.balcony}
              selectClasses={selectClasses}
            />

            {/* floor no input field  */}
            <CustomSelect
              label="FLOOR NO"
              options={floorOptions}
              value={floor}
              setInputValue={(type) => setFloor(type)}
              errorMessages={errorMessages.floorno}
              selectClasses={selectClasses}
            />
          </Box>
        </Stack>

        <CustomButton
          value={"Next"}
          type="button"
          className="btn btn-primary btn--radius px-3 mt-4 d-lg-flex"
          onClick={() => nextStep(2)}
        />
      </div>

      {/* Step 2: Locazltional information */}
      <div
        id="step2"
        className={`form-step ${currentStep === 2 ? "visible" : ""}`}
      >
        <h3 className="title">Location information</h3>

        <Stack spacing={2}>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* divition input field  */}
            <CustomSelect
              currentStep={2}
              label="DIVISION"
              options={divisionsData.map((division) => division.name)}
              value={division}
              setInputValue={(data) => setDivision(data)}
              errorMessages={errorMessages.division}
              selectClasses={selectClasses}
            />

            {/* district input field  */}
            <CustomSelect
              currentStep={2}
              label="DISTRICT"
              options={selectedDistrict?.map(
                (districtName) => districtName.name
              )}
              value={district}
              setInputValue={(data) => setDistrict(data)}
              errorMessages={errorMessages.district}
              selectClasses={selectClasses}
            />
          </Box>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* Area/Thana input field  */}
            <CustomSelect
              currentStep={2}
              label="AREA/THANA"
              options={selectedUpazila?.map((upazilaName) => upazilaName)}
              value={thana}
              setInputValue={(data) => setThana(data)}
              errorMessages={errorMessages.thana}
              selectClasses={selectClasses}
            />
          </Box>
        </Stack>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <CustomButton
            value={"Previous"}
            type="button"
            className="btn btn--radius prev-btn--gray px-3 d-lg-flex"
            onClick={() => previousStep(1)}
          />

          <CustomButton
            value={"Next"}
            type="button"
            className="btn btn-primary btn--radius px-3 d-lg-flex"
            onClick={() => nextStep(3)}
          />
        </div>
      </div>

      {/* Step 3: Additional information */}
      <div
        id="step3"
        className={`form-step ${currentStep === 3 ? "visible" : ""}`}
      >
        <h3 className="title">Additional information</h3>
        <Stack spacing={2}>
          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* image1 input field  */}
            <div className="form-group mb-2">
              <label htmlFor="inputName">Image1:</label>
              <input
                type="file"
                className="form-control"
                id="inputName"
                placeholder="Your Announcement"
                errorMessages={errorMessages.thana}
                required
              />
            </div>

            {/* image2 input field  */}
            <div className="form-group mb-2">
              <label htmlFor="inputName">Image2:</label>
              <input
                type="file"
                className="form-control"
                id="inputName"
                placeholder="Your Announcement"
                errorMessages={errorMessages.thana}
              />
            </div>
          </Box>

          <Box
            gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* available month input field  */}
            <CustomSelect
              currentStep={2}
              label="AVAILBLE FROM"
              options={monthOptions}
              value={availableFrom}
              setInputValue={(type) => setAvailableFrom(type)}
              errorMessages={errorMessages.availableFrom}
              selectClasses={selectClasses}
            />

            {/* Rent input field  */}
            <CustomInput
              label="RENT"
              type={"number"}
              value={rent}
              setInputValue={(type) => setRent(type)}
              errorMessages={errorMessages.rent}
            />
          </Box>

          <Box
            // gap={2}
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            sx={{
              flexDirection: "column", // Stack items vertically on smaller screens
              "@media (min-width: 600px)": {
                flexDirection: "row", // Stack items horizontally on larger screens
              },
            }}
          >
            {/* additional information: input field  */}
            <CustomTextarea
              label="ADITIONAL ADDRESS"
              value={additionalInfo}
              setInputValue={(info) => setAdditionalInfo(info)}
              errorMessages={errorMessages.additionalInfo}
            />
          </Box>
        </Stack>
        <br />
        <div>
          <h3>About Landlord</h3>
          <br />
          {/* name */}
          <div className="form-group mb-2">
            <label htmlFor="inputName">Name:</label>
            <input
              type="text"
              className="form-control"
              id="inputaddedby"
              placeholder="Your Name"
            />
          </div>
          {/* email */}
          <div className="form-group mb-2">
            <label htmlFor="inputName">Email:</label>
            <input
              type="email"
              className="form-control"
              id="inputName"
              placeholder="Your Email"
            />
          </div>
          {/* phone */}
          <div className="form-group mb-2">
            <label htmlFor="inputName">Phone:</label>
            <input
              type="number"
              className="form-control"
              id="inputName"
              placeholder="Your Phone No"
            />
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <CustomButton
            value="Previous"
            type="button"
            className="btn btn--radius prev-btn--gray px-3 d-lg-flex"
            onClick={() => previousStep(2)}
          />
          <CustomButton
            value="Submit"
            type="submit"
            className="btn btn-primary btn--radius px-3 d-lg-flex"
          />
        </div>
      </div>
      {isLoading && <Spinner />}
    </form>
      </div>
    </div>
  );
};

export default EditProperty;
