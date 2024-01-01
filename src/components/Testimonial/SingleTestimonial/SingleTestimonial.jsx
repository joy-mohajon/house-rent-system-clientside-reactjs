import { Rating } from "@mui/material";
import React from "react";

const SingleTestimonial = ({ quote, profileImg, name, profession }) => {
  return (
    <div className="testimonial-item bg-light rounded p-3">
      <div className="bg-white border rounded p-4">
        <Rating
          className="mx-auto mb-1"
          style={{ maxWidth: 150 }}
          value={quote?.rating}
          readOnly
        />
        <p>{quote?.review}</p>
        <div className="d-flex align-items-left">
          <div className="pt-3">
            <h6 className="fw-bold">{quote?.name}</h6>
            <small>{quote?.profession}</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
