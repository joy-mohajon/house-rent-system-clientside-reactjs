import React from 'react';

const Rentcard = ({delayTime, bgwhite, recentData}) => {
    const { _id, code, name, category, gender, propertytype, balcony,
     bedroom, bathroom, floor, division,  district, thana, availablefrom, rent, summary, addedby, img1, img2  } = recentData;

    // Conditionally update styles based on bgwhite
    const conditionalStyles = {
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.4)",
        borderBottom: "1px solid rgba(240, 240, 240, 1)",
        backgroundColor: bgwhite === "false" ? "var(--light)" : "white",
    };

    return (
        <div 
      className="col-lg-4 py-2 px-2 col-md-6 col-12 wow fadeInUp"
      data-wow-delay={delayTime} 
    >
      <div  
        className={`property-item rounded overflow-hidden `}
        style={conditionalStyles}
      >
        <div className="position-relative overflow-hidden">
          {/* img */}
          <a  >
            <img className="img-fluid" src={img1} alt="" />
          </a>

          {/* category */}
          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
            For {category}
          </div>

          <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
            Room
          </div>
          
        </div>

        <div className="p-4 pb-0">
          {/* rent */}
          <h5 className="text-primary mb-3"> {rent} BDT/Month </h5>
          <small className="text-primary " > Code: {code} </small>
          {/* name */}
          <a className="d-block h5 mb-2">
            {name}
          </a>

          {/* division */}
          <p>
            <i className="fa fa-map-marker-alt text-primary me-2"></i>
            {division} 
          </p>

        </div>
        <div className="d-flex border-top">
          {/* balcony */}
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-ruler-combined text-primary me-2"></i> {balcony} balcony
          </small>
          {/* bedroom */}
          <small className="flex-fill text-center border-end py-2">
            <i className="fa fa-bed text-primary me-2"></i> {bedroom} Bed
          </small>
          {/* bathroom */}
          <small className="flex-fill text-center py-2">
            <i className="fa fa-bath text-primary me-2"></i> {bathroom} Bath
          </small>

        </div>

      </div>
    </div>
    );
};

export default Rentcard;