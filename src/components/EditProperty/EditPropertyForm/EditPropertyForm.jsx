import { Box, Stack, selectClasses } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
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
import Spinner from "../../Spinner/Spinner";
import axios from "axios";

const EditPropertyForm = ({ currentStep, stepHandler }) => {
  const [update, setUpdate] = useState({});
  const {id} = useParams();
  const navigate = useNavigate();

   // single data load
    useEffect( ()=>{
        fetch(`http://localhost:5000/rent/${id}`)
        .then(res=> res.json())
        .then( (data)=>{
            setUpdate(data)
        } )
    }, [] )

    // 1. update category
    const handleCategoryChange = event =>{
      const updateCategory = event.target.value;
      const updateRent = {
        category: updateCategory, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony:update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 2. update img1
    const handleImg1Change = event =>{
      const updateImg1 = event.target.value;
      const updateRent = {
        category: update.category, img1: updateImg1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony:update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 3. update img2
    const handleImg2Change = event =>{
      const updateImg2 = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: updateImg2,
        gender: update.gender, propertytype: update.propertytype, balcony:update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 4. handle gender
    const handleGender = event =>{
      const updateGender = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: updateGender, propertytype: update.propertytype, balcony:update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 5. property type
    const handlePropertyType = event =>{
      const updatePropertyType = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: updatePropertyType, balcony:update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 6. balcony
    const handleBalcony = event =>{
      const updateBalcony = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: updateBalcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 7. bedroom
    const handleBedroom = event =>{
      const updateBedroom = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: updateBedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 8. bathroom
    const handleBathroom = event =>{
      const updateBathroom = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: updateBathroom, floor: update.floor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 9. floor
    const handleFloor = event =>{
      const updateFloor = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: updateFloor,
        division: update.division, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 10. division
    const handleDivision = event =>{
      const updateDivision = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: updateDivision, district: update.district, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 11. district
    const handleDistrict = event =>{
      const updateDistrict = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: updateDistrict, thana: update.thana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 12. thana
    const handleThana = event =>{
      const updateThana = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: updateThana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 13. available from
    const handleAvailableFrom = event =>{
      const updateAvailableFrom = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: updateThana,
        availablefrom: updateAvailableFrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 14. rent
    const handleRent = event =>{
      const updateRentPrice = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: updateThana,
        availablefrom: update.availablefrom, rent: updateRentPrice, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 15. update Additiona lInfo
    const handleAdditionalInfo = event =>{
      const updateAdditionalInfo = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: updateThana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: updateAdditionalInfo,
        addBy: update.addBy, email: update.email, phone: update.phone
      }

    }

    // 16. update addBy
    const handleAddBy = event =>{
      const updateAddBy = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: updateThana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: updateAddBy, email: update.email, phone: update.phone
      }

    }

    // 17. email update
    const handleEmail = event =>{
      const updateEmail = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: updateThana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: updateEmail, phone: update.phone
      }

    }

    // 18.  phone update
    const handlePhone = event =>{
      const updatePhone = event.target.value;
      const updateRent = {
        category: update.category, img1: update.img1, img2: update.img2,
        gender: update.gender, propertytype: update.propertytype, balcony: update.balcony,
        bedroom: update.bedroom, bathroom: update.bathroom, floor: update.floor,
        division: update.division, district: update.district, thana: updateThana,
        availablefrom: update.availablefrom, rent: update.rent, additionalInfo: update.additionalInfo,
        addBy: update.addBy, email: update.email, phone: updatePhone
      }

    }

  
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
    } 
    // else if (!isValidPhoneNumber(phone)) {
    // //   errors.phone = "Invalid phone number format";
    // // }

    setErrorMessages({ ...errorMessages, ...errors });

    return Object.keys(errors).length === 0; // Returns true if no errors
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

  // update
  async function updateApartment(){
    try{
      const response = await axios.put(
        `http://localhost:5000/rent/${id}`, {
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(update)
        }
      )
      

    } catch (error) {
      console.error("Error adding apartment:", error);
      throw error;
    }
  }
 
  // update Form submission
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

        const upApartment = {
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

        const apartmentResponse = await updateApartment(upApartment);

        if (apartmentResponse.insertedId) {
          reset();

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Updated successfully",
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

    

    navigate("/apartments");
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



  return (
    <div>
      <div>

        <form onSubmit={onSubmitHandler} >
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
              onChange={handleCategoryChange}
               defaultValue={update.category || ''}
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
              onChange={handlePropertyType}
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
              onChange={handleGender}
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
              onChange={handleBedroom}
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
              onChange={handleBathroom}
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
              onChange={handleBalcony}
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
              onChange={handleFloor}
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
              onChange={handleDivision}
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
              onChange={handleDistrict}
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
              onChange={handleThana}
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
                // onChange={handleImg1Change}
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
              onchange={handleAvailableFrom}
              // {...register("availablefrom", { required: true })}
            />

            {/* Rent input field  */}
            <CustomInput
              label="RENT"
              type={"number"}
              value={rent}
              setInputValue={(type) => setRent(type)}
              errorMessages={errorMessages.rent}
              onChange={handleRent}
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
              onChange={handleAdditionalInfo}
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
                onChange={handleAddBy}
              />
              {/* email */}
              <CustomInput
                label="YOUR EMAIL"
                type={"email"}
                value={email}
                setInputValue={(data) => setEmail(data)}
                errorMessages={errorMessages.email}
                onChange={handleEmail}
              />
              {/* phone */}
              <CustomInput
                label="PHONE NUMBER"
                type={"text"}
                value={phone}
                setInputValue={(data) => setPhone(data)}
                errorMessages={errorMessages.phone}
                onChange={handlePhone}
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

      </div>
    </div>
  );
};

export default EditPropertyForm;
