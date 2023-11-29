import React from "react";
import property1 from "../../../assets/images/property-1.jpg";
import property2 from "../../../assets/images/property-2.jpg";
import property3 from "../../../assets/images/property-3.jpg";
import property4 from "../../../assets/images/property-4.jpg";
import property5 from "../../../assets/images/property-5.jpg";
import property6 from "../../../assets/images/property-6.jpg";
import PropertyHeader from "../PropertyHeader/PropertyHeader";
import SingleProperty from "../SingleProperty/SingleProperty";
import "./PropertyList.css";

const PropertyList = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <PropertyHeader />
        <div className="tab-content">
          <div id="tab-1" className="tab-pane fade show p-0 active">
            <div className="row g-4">
              <SingleProperty propertyImg={property1} />
              <SingleProperty propertyImg={property2} />
              <SingleProperty propertyImg={property3} />
              <SingleProperty propertyImg={property4} />
              <SingleProperty propertyImg={property5} />
              <SingleProperty propertyImg={property6} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
