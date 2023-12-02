import React from "react";
import property1 from "../../assets/images/property-1.jpg";
import property2 from "../../assets/images/property-2.jpg";
import property3 from "../../assets/images/property-3.jpg";
import property4 from "../../assets/images/property-4.jpg";
import property5 from "../../assets/images/property-5.jpg";
import property6 from "../../assets/images/property-6.jpg";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import DashNavbar from "../../components/Navbar/DashNav/DashNavbar";

const PropertyInfo = () => {
  return (
    <div className="container">
      <DashNavbar />
      <div className="container-fluid mt-3">
        <div className="row flex-row-reverse">
          <div className="col-md-6 " style={{ padding: "0 0px 0 10px" }}>
            <div className="row mb-3">
              <div className="col">
                <div
                  className="bg-white pt-3 px-3 pb-2 rounded"
                  style={{
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                    borderBottom: "1px solid rgba(240, 240, 240, 1)",
                  }}
                >
                  <ImageCarousel
                    images={[
                      property1,
                      property2,
                      property3,
                      property4,
                      property5,
                      property6,
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <div
                  className=" bg-white pt-3 px-3 pb-2 rounded"
                  style={{
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                    borderBottom: "1px solid rgba(240, 240, 240, 1)",
                  }}
                >
                  video
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 " style={{ padding: "0 10px 0 0px" }}>
            <div className="row">
              <div className="col-sm-12 mb-3">
                <div
                  className="card bg-white rounded"
                  style={{
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                    borderBottom: "1px solid rgba(240, 240, 240, 1)",
                  }}
                >
                  <div className="card-header bg-primary text-white">
                    Basic Information
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-4">Category:</dt>
                      <dd className="col-sm-8">Residential</dd>

                      <dt className="col-sm-4">Gender:</dt>
                      <dd className="col-sm-8">Male only</dd>

                      <dt className="col-sm-4">Property Type:</dt>
                      <dd className="col-sm-8">Apartment</dd>

                      <dt className="col-sm-4">Balcony No:</dt>
                      <dd className="col-sm-8">1</dd>

                      <dt className="col-sm-4">Bedroom:</dt>
                      <dd className="col-sm-8">2</dd>

                      <dt className="col-sm-4">Bathroom:</dt>
                      <dd className="col-sm-8">1</dd>

                      <dt className="col-sm-4">Floor no:</dt>
                      <dd className="col-sm-8">1</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 mb-3">
                <div
                  className="card bg-white  rounded"
                  style={{
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                    borderBottom: "1px solid rgba(240, 240, 240, 1)",
                  }}
                >
                  <div className="card-header bg-primary text-white">
                    Location Information
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-4">Division:</dt>
                      <dd className="col-sm-8">Dhaka</dd>

                      <dt className="col-sm-4">District:</dt>
                      <dd className="col-sm-8">Dhaka</dd>

                      <dt className="col-sm-4">Area/Thana:</dt>
                      <dd className="col-sm-8">Dhanmondi</dd>
                    </dl>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 mb-3">
                <div
                  className="card bg-white  rounded"
                  style={{
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
                    borderBottom: "1px solid rgba(240, 240, 240, 1)",
                  }}
                >
                  <div className="card-header bg-primary text-white">
                    Additional Information
                  </div>
                  <div className="card-body">
                    <dl className="row">
                      <dt className="col-sm-4">Available From:</dt>
                      <dd className="col-sm-8">January</dd>

                      <dt className="col-sm-4">Rent:</dt>
                      <dd className="col-sm-8">4800</dd>

                      <dt className="col-sm-4">Summary:</dt>
                      <dd className="col-sm-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
