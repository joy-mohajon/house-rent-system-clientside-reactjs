import React from "react";
import property1 from "../../../assets/images/property-1.jpg";
import property2 from "../../../assets/images/property-2.jpg";
import property3 from "../../../assets/images/property-3.jpg";
import property4 from "../../../assets/images/property-4.jpg";
import property5 from "../../../assets/images/property-5.jpg";
import property6 from "../../../assets/images/property-6.jpg";
import useAuth from "../../../pages/Auth/useAuth/useAuth";

const FooterHead = () => {
  const {user} = useAuth();

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Get In Touch</h5>
          <p className="mb-2 text-white">
            <i className="fa fa-map-marker-alt me-3 "></i>123/A Dilkusha, Motijheel-1000,
            Dhaka, Bangladesh
          </p>
          <p className="mb-2 text-white">
            <i className="fa fa-phone-alt me-3"></i>+880 1515000111
          </p>
          <p className="mb-2 text-white">
            <i className="fa fa-envelope me-3"></i>rent@gmail.com
          </p>
          <div className="d-flex pt-2">
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-youtube"></i>
            </a>
            <a className="btn btn-outline-light btn-social" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 ">
          <h5 className="text-white mb-4">Quick Links</h5>
          <a className="btn btn-link text-white" href="#">
            Home
          </a>
          <a className="btn btn-link text-white" href="#search">
            Search
          </a>
          <a className="btn btn-link text-white" href="#propertylist">
            Property List
          </a>
          <a className="btn btn-link text-white" href="#Testimonial">
            Testimonial
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Photo Gallery</h5>
          <div className="row g-2 pt-2">
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src={property1}
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src={property2}
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src={property3}
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src={property4}
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src={property5}
                alt=""
              />
            </div>
            <div className="col-4">
              <img
                className="img-fluid rounded bg-light p-1"
                src={property6}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* user info */}
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">User</h5>
          <p className="text-white mb-2"> User Name: {user?.displayName && user.displayName} </p>
          <p className="text-white ">User Email: {user?.email && user.email}  </p>
        </div>

      </div>
    </div>
  );
};

export default FooterHead;
