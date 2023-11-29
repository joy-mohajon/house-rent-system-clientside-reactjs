import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

const NavLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default NavLayout;
