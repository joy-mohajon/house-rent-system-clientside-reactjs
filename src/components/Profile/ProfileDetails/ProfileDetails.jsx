import React from "react";

import { Link } from "react-router-dom";
const ProfileDetails = ({ userDetails }) => {

  return (
    <div className="container-fluid px-0 mt-4">
      <div
        className="card"
        style={{
          boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
          borderBottom: "1px solid rgba(240, 240, 240, 1)",
        }}
      >
        {/* <div className="card-header bg-primary text-white">
          <h5 className="text-white">Profile Details</h5>
        </div> */}
        <div className="card-body">
          <div className="row">
            {/* <div className="col-md-3">
              <img
                src="http://placehold.it/200x200"
                alt="Profile Image"
                className="img-fluid rounded-circle mb-3"
              />
            </div> */}
            <div className="col-md-12">
              <div className="form-group mb-2">
                <label htmlFor="inputName">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  value={userDetails?.name}
                  readOnly
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="inputNumber">Number:</label>
                <input
                  type="tel"
                  className="form-control"
                  id="inputNumber"
                  value={userDetails?.phone}
                  readOnly
                />
              </div>

              <div className="form-group mb-2">
                <label htmlFor="inputEmail">Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value={userDetails?.email}
                  readOnly
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="inputAddress">Address:</label>
                <textarea
                  className="form-control"
                  id="inputAddress"
                  rows="3"
                  value={userDetails?.address}
                  readOnly
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      
      
    </div>
  );
};

export default ProfileDetails;
