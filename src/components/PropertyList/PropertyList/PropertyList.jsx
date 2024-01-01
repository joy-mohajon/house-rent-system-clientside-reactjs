import React from "react";
import "./PropertyList.css";
import LoadRent from "../../Rent/LoadRent";
import { Link } from "react-router-dom";

const PropertyList = ({ bgwhite }) => {
  return (
    <div id="propertylist" className="container py-5">
      <div className="container">
        {/* header */}
        <div
          className="text-start mx-auto wow slideInLeft"
          data-wow-delay="0.1s"
        >
          <h1 className="mb-3">Recent Apartments</h1>
          <p>
            Recent apartments offer sleek, modern designs and updated amenities,
            often at competitive prices. Choosing a flexible location unlocks
            access to trendy neighborhoods or convenient commutes, tailoring
            your living experience.Newer buildings often boast updated features
            like energy-efficient appliances, better insulation, secure entry
            systems, and fitness centers.
          </p>
          <LoadRent></LoadRent>
          <Link
            href="/apartments"
            className="btn btn-primary px-4 me-3 animated fadeIn mt-3"
          >
            View All
          </Link>
        </div>
        {/* <PropertyHeader /> */}
      </div>
    </div>
  );
};

export default PropertyList;
