import React from "react";
import Categories from "../../components/Categories/Categories/Categories";
import Header from "../../components/Header/Header/Header";
import PropertyList from "../../components/PropertyList/PropertyList/PropertyList";
import Search from "../../components/Search/Search";
import Testimonial from "../../components/Testimonial/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="container-xxl bg-white p-0">
      <Header />
      <Search />
      <Categories />
      <PropertyList />
      <Testimonial />
    </div>
  );
};

export default Home;
