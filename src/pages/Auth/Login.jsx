import axios from "axios";
import React, { useState } from "react";
import notEyeImg from "../../assets/images/eye_closed.svg";
import eyeImg from "../../assets/images/eye_open.svg";
import singinImg from "../../assets/images/signin-image.jpg";
import "./styles.css";
const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://your-api-endpoint.com/login",
          {
            email,
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
    <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-image">
            <figure>
              <img src={singinImg} alt="sing up image" />
            </figure>
            <a href="signup.html" className="signup-image-link">
              Create an account
            </a>
          </div>

          <div className="signin-form">
            <h2 className="form-title">Sign In</h2>
            <form
              method="POST"
              className="register-form"
              id="login-form"
              onSubmit={handleSubmit}
            >
              <div className="input-group">
                <label htmlFor="email">
                  <i className="zmdi zmdi-email"></i>
                </label>
                <input
                  className="input--style-1"
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="input-group">
                <label htmlFor="password">
                  <i className="zmdi zmdi-lock"></i>
                </label>
                <input
                  className="input--style-1"
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Your Password"
                  name="password"
                  id="password"
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
                  name="signin"
                  id="signin"
                  className="form-submit"
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
