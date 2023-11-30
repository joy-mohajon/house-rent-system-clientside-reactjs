import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../assets/images/icon-deal.png";
import "./Navbar.css";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Check if the clicked element is not part of the navbar
      if (navbarRef.current && !navbarRef.current.contains(e.target)) {
        // Collapse the navbar if it is not already collapsed
        const navbarCollapse = document.getElementById("navbarCollapse");
        if (navbarCollapse.classList.contains("show")) {
          document.getElementById("navbarToggleBtn").click();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      className={`container-fluid nav-bar ${
        isSticky ? "sticky-top" : ""
      } bg-transparent`}
    >
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-center"
        >
          <div className="icon p-2 me-2">
            <img
              className="img-fluid"
              src={logoImg}
              alt="Icon"
              style={{ width: "30px", height: "30px" }}
            />
          </div>
          <h1 className="m-0 text-primary">House Rent</h1>
        </Link>
        <button
          ref={navbarRef}
          id="navbarToggleBtn"
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/about" className="nav-item nav-link">
              About
            </Link>
            <Link to="/login" className="nav-item nav-link">
              Login
            </Link>
            <Link to="/signup" className="nav-item nav-link">
              Signup
            </Link>
            <Link to="/contact" className="nav-item nav-link">
              Contact
            </Link>
          </div>
          <Link
            to="/addproperty"
            className="btn btn-primary px-3 d-none d-lg-flex"
          >
            Add Property
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

{
  /* <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Property</a
              >
              <div class="dropdown-menu rounded-0 m-0">
                <a href="property-list.html" class="dropdown-item"
                  >Property List</a
                >
                <a href="property-type.html" class="dropdown-item"
                  >Property Type</a
                >
                <a href="property-agent.html" class="dropdown-item"
                  >Property Agent</a
                >
              </div>
            </div>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                >Pages</a
              >
              <div class="dropdown-menu rounded-0 m-0">
                <a href="testimonial.html" class="dropdown-item"
                  >Testimonial</a
                >
                <a href="404.html" class="dropdown-item">404 Error</a>
              </div>
            </div>  */
}
