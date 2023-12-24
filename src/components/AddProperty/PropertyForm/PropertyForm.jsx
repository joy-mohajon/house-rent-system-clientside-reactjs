import { Box, Stack, selectClasses } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { divisionsData } from "../../../config/AddPropertyForm/Divisions";
import {
  balconyOptions,
  bathroomOptions,
  bedroomOptions,
  categoryOptions,
  floorOptions,
  genderOptions,
  monthOptions,
  propertyTypeOptions,
} from "../../../config/AddPropertyForm/SelectOptions";
import CustomButton from "../../CustomButton/CustomButton";
import CustomInput from "../../CustomInput/CustomInput";
import CustomTextarea from "../../CustomInput/CustomTextarea";
import CustomSelect from "../../CustomSelect/CustomSelect";
import "./PropertyForm.css";
import axios from "axios";
import Swal from "sweetalert2";
import { Apartment } from "@material-ui/icons";
import { useStepContext } from "@mui/material";
import Spinner from "../../Spinner/Spinner";

const PropertyForm = ({ currentStep, stepHandler }) => {
  const navigate = useNavigate();

  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=8a5a04f93faaf1072c6596fcf564df79`;

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

  const isValidPhoneNumber = (phone) => {
    // You can implement your own phone number validation logic here
    // For a simple example, this checks if it contains only digits
    return /^\d+$/.test(phone);
  };

  // Validation functions 1
  const validateStep1 = () => {
    const errors = {};
    // console.log("validateStep1", category, propertyType);
    if (!category) {
      errors.category = "Category is required";
    }

    if (!gender) {
      errors.gender = "Gender is required";
    }

    if (!propertyType) {
      errors.propertyType = "Property Type is required";
    }

    if (!bedroom) {
      errors.bedroom = "Bedroom is required";
    }

    if (!bathroom) {
      errors.bathroom = "Bathroom is required";
    }

    if (!balcony) {
      errors.balcony = "Balcony is required";
    }

    if (!floor) {
      errors.floorno = "Floor is required";
    }

    setErrorMessages({ ...errorMessages, ...errors });

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Validation functions 2
  const validateStep2 = () => {
    const errors = {};

    if (!division) {
      errors.division = "Division is required";
    }

    if (!district) {
      errors.district = "District is required";
    }

    if (!thana) {
      errors.thana = "Thana/Area is required";
    }

    setErrorMessages({ ...errorMessages, ...errors });

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Validation functions 3
  const validateStep3 = () => {
    const errors = {};

    if (!availableFrom) {
      errors.availableFrom = "Available From is required";
    }

    if (!rent) {
      errors.rent = "Rent is required";
    }

    if (!addBy || addBy.trim() === "") {
      errors.addBy = "Your name is required";
    }

    if (!email || email.trim() === "") {
      errors.email = "Your Email is required";
    }

    if (!phone || phone.trim() === "") {
      errors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(phone)) {
      errors.phone = "Invalid phone number format";
    }

    setErrorMessages({ ...errorMessages, ...errors });

    return Object.keys(errors).length === 0; // Returns true if no errors
  };

  // Navigation functions
  const nextStep = (step) => {
    if (step === 2 && !validateStep1()) {
      return;
    }

    if (step === 3 && !validateStep2()) {
      return;
    }

    stepHandler(step);
  };
  const previousStep = (step) => {
    stepHandler(step);
  };

  // make image api
  async function uploadImage(formData) {
    try {
      const response = await axios.post(img_hosting_url, formData);
      return response.data;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  }

  // add new Apartment api
  async function addApartment(newApartment) {
    console.log("new appartment: ===", newApartment);
    try {
      const response = await axios.post("/rent", newApartment);
      return response.data;
    } catch (error) {
      console.error("Error adding apartment:", error);
      throw error;
    }
  }

  // Form submission
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validate before submission
    if (!validateStep1() || !validateStep2() || !validateStep3()) {
      return;
    }

    const formData = new FormData();
    formData.append("category", category);
    formData.append("propertyType", propertyType);
    formData.append("bedroom", bedroom);
    formData.append("bathroom", bathroom);
    formData.append("balcony", balcony);
    formData.append("floor", floor);
    formData.append("division", division);
    formData.append("district", district);
    formData.append("thana", thana);
    formData.append("availableFrom", availableFrom);
    formData.append("rent", rent);
    formData.append("gender", gender);
    formData.append("additionalInfo", additionalInfo);

    try {
      setIsLoading(true);

      const formDataImg1 = new FormData();
      formDataImg1.append("image", image1);

      const formDataImg2 = new FormData();
      formDataImg2.append("image", image2);

      const imgResponse1 = await uploadImage(formDataImg1);
      const imgResponse2 = await uploadImage(formDataImg2);

      if (imgResponse1.success && imgResponse2.success) {
        const imgUrl1 = imgResponse1.data.display_url;
        const imgUrl2 = imgResponse2.data.display_url;

        console.log("Image 1 URL:", imgUrl1);
        console.log("Image 2 URL:", imgUrl2);

        const newApartment = {
          category,
          img1: imgUrl1,
          img2: imgUrl2,
          gender,
          propertytype: propertyType,
          balcony,
          bedroom,
          bathroom,
          floor,
          division,
          district,
          thana,
          availablefrom: availableFrom,
          rent: parseFloat(rent),
          additionalInfo,
          addBy,
          email,
          phone,
        };

        const apartmentResponse = await addApartment(newApartment);

        if (apartmentResponse.insertedId) {
          reset();

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (error) {
      console.error(
        "Error handling image upload and apartment addition:",
        error
      );
    } finally {
      setIsLoading(false);
    }

    // Append image and video files if they exist
    // if (image1) {
    //   formData.append("image", image1);
    // }
    // if (image2) {
    //   formData.append("image2", image2);
    // }
    // if (video) {
    //   formData.append("video", video);
    // }

    // console.log("Form submitted successfully!", formData);
    // console.log("district value: ===========", division, district, thana);
    // console.log("Form submitted successfully! catgory", category);
    // console.log("Form submitted successfully! distict", district);
    // console.log("Form submitted successfully! available from", availableFrom);
    // console.log("Form submitted successfully! rent", rent);
    // console.log("Form submitted successfully! additional", additionalInfo);
    // console.log("Form submitted successfully! iamge", image2);

    // fetch(img_hosting_url, {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((imgResponse) => {
    //     if (imgResponse.success) {
    //       const imgUrl = imgResponse.data.display_url;
    //       console.log(imgUrl);

    //       const newApartment = {
    //         category,
    //         img1: imgUrl,
    //         img2: imgUrl,
    //         gender,
    //         propertytype: propertyType,
    //         balcony,
    //         bedroom,
    //         bathroom,
    //         floor,
    //         division,
    //         district,
    //         thana,
    //         availablefrom: availableFrom,
    //         rent: parseFloat(rent),
    //         additionalInfo,
    //         addBy,
    //         email,
    //         phone,
    //       };

    //       axiosSecure
    //         .post("/rent", newApartment)

    //         .then((data) => {
    //           if (data.data.insertedId) {
    //             reset();

    //             Swal.fire({
    //               position: "top-end",
    //               icon: "success",
    //               title: "Added successfully",
    //               showConfirmButton: false,
    //               timer: 1500,
    //             });
    //           }
    //         });
    //       console.log("apartment data = ", newApartment);
    //     }
    //   });

    navigate("/apartments");
  };

  // useEffect to clear specific error messages based on state updates
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
    <form onSubmit={onSubmitHandler}>
      {/* Step 1: Item Details  */}
      <div
        id="step1"
        className={`form-step ${currentStep === 1 ? "visible" : ""}`}
      >
        <h3 className="title">Basic information</h3>
        {/* announcement
        <div className="form-group mb-2">
          <label htmlFor="inputName">Announcement:</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Your Announcement"
            // {...register("name", { required: true })}
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
              value={category}
              setInputValue={(type) => setCategory(type)}
              options={categoryOptions}
              errorMessages={errorMessages.category}
              selectClasses={selectClasses}
              // {...register("category", { required: true })}
            />

            {/* property input field  */}
            <CustomSelect
              label="PROPERTY TYPE"
              value={propertyType}
              setInputValue={(type) => setPropertyType(type)}
              options={propertyTypeOptions}
              errorMessages={errorMessages.propertyType}
              selectClasses={selectClasses}
              // {...register("propertytype", { required: true })}
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
              // {...register("gender", { required: true })}
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
              // {...register("bedroom", { required: true })}
            />

            {/* bathroom input field  */}
            <CustomSelect
              label="BATHROOM"
              options={bathroomOptions}
              value={bathroom}
              setInputValue={(type) => setBathroom(type)}
              errorMessages={errorMessages.bathroom}
              selectClasses={selectClasses}
              // {...register("bathroom", { required: true })}
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
              // {...register("balcony", { required: true })}
            />

            {/* floor no input field  */}
            <CustomSelect
              label="FLOOR NO"
              options={floorOptions}
              value={floor}
              setInputValue={(type) => setFloor(type)}
              errorMessages={errorMessages.floorno}
              selectClasses={selectClasses}
              // {...register("floor", { required: true })}
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
              // {...register("division", { required: true })}
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
              // {...register("district", { required: true })}
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
              // {...register("thana", { required: true })}
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
                onChange={(e) => setImage1(e.target.files[0])}
                // errorMessages={errorMessages.thana}
                // {...register("img1", { required: true })}
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
                onChange={(e) => setImage2(e.target.files[0])}
                // errorMessages={errorMessages.thana}
                // {...register("img2", { required: true })}
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
              // {...register("availablefrom", { required: true })}
            />

            {/* Rent input field  */}
            <CustomInput
              label="RENT"
              type={"number"}
              value={rent}
              setInputValue={(type) => setRent(type)}
              errorMessages={errorMessages.rent}
              // {...register("rent", { required: true })}
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
              // {...register("summary", { required: true })}
            />
          </Box>
        </Stack>
        <br />
        <div>
          {/* <h3>About Landlord</h3> */}
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
              {/* name */}
              <CustomInput
                label="YOUR NAME"
                type={"text"}
                value={addBy}
                setInputValue={(name) => setAddBy(name)}
                errorMessages={errorMessages.addBy}
              />
              {/* email */}
              <CustomInput
                label="YOUR EMAIL"
                type={"email"}
                value={email}
                setInputValue={(data) => setEmail(data)}
                errorMessages={errorMessages.email}
              />
              {/* phone */}
              <CustomInput
                label="PHONE NUMBER"
                type={"text"}
                value={phone}
                setInputValue={(data) => setPhone(data)}
                errorMessages={errorMessages.phone}
              />
            </Box>
          </Stack>
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
  );
};

export default PropertyForm;
