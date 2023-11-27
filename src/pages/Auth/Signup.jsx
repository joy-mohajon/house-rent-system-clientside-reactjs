import axios from "axios";
import React, { useState } from "react";
import notEyeImg from "../../assets/images/eye_closed.svg";
import eyeImg from "../../assets/images/eye_open.svg";
import singupImg from "../../assets/images/signup-image.jpg";
import "./styles.css";

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation example (you can replace it with your own validation logic)
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        // Assuming you have an API endpoint for user registration
        const response = await axios.post(
          "https://your-api-endpoint.com/register",
          {
            name,
            email,
            phone,
            password,
          }
        );

        // Handle the API response as needed
        console.log("API Response:", response.data);

        // You might want to redirect the user or perform other actions based on the API response
      } catch (error) {
        // Handle errors, such as displaying an error message
        console.error("API Error:", error.message);
      }
    } else {
      // Update the errors state to display validation messages
      setErrors(newErrors);
    }
  };

  return (
    <section className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-form">
            <h2 className="form-title">Sign up</h2>
            <form
              method="POST"
              className="register-form"
              id="register-form"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={handleNameChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="input-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="phone">
                  <i className="zmdi zmdi-phone"></i>
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your phone number"
                  value={phone}
                  onChange={handlePhoneChange}
                />
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {errors.password && (
                  <p className="error-message">{errors.password}</p>
                )}
                <button
                  type="button"
                  id="show-passwd"
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={isPasswordVisible ? eyeImg : notEyeImg}
                    alt="Show Password"
                  />
                </button>
              </div>
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
          <div className="signup-image">
            <figure>
              <img src={singupImg} alt="sing up image" />
            </figure>
            <a href="login.html" className="signup-image-link">
              I am already member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;