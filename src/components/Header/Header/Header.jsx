import React from "react";

import HeaderCarousel from "../HeaderCarousel/HeaderCarousel";
import HeaderContent from "../HeaderContent/HeaderContent";
import "./Header.css";

const Header = () => {
  return (
    // Header Start
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
        <HeaderContent />
        <HeaderCarousel />
      </div>
    </div>
    // Header end
  );
};

export default Header;
