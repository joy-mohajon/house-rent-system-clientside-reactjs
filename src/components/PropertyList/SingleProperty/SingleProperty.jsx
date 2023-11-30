import React from "react";

const SingleProperty = ({ propertyImg, delayTime }) => {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delayTime}>
      <div className="property-item rounded overflow-hidden">
        <div className="position-relative overflow-hidden">
          <a href="">
            <img className="img-fluid" src={propertyImg} alt="" />
          </a>
          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
            For Family
          </div>
          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
            Room
          </div>
        </div>
        <div className="p-4 pb-0">
          <h5 className="text-primary mb-3">$12,345</h5>
          <a className="d-block h5 mb-2" href="">
            Golden Urban House For Sell
          </a>
          <p>
            <i className="fa fa-map-marker-alt text-primary me-2"></i>123
            Street, New York, USA
          </p>
        </div>
        <div className="d-flex border-top">
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-ruler-combined text-primary me-2"></i>1000 Sqft
          </small>
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-bed text-primary me-2"></i>3 Bed
          </small>
          <small className="flex-fill text-center py-2">
            <i className="fa fa-bath text-primary me-2"></i>2 Bath
          </small>
        </div>
      </div>
    </div>
  );
};

export default SingleProperty;
