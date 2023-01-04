import React from "react";
import "./Review.css";
import SvgIcon from "../../assets/Images/OtherPictures/icon1.svg";
import SvgIcon2 from "../../assets/Images/OtherPictures/icon2.svg";
import SvgIcon3 from "../../assets/Images/OtherPictures/icon3.svg";
import SvgIcon4 from "../../assets/Images/OtherPictures/icon4.svg";

const Review = () => {
  return (
    <>
      <div className="px-4 mt-5 text-center">
        <h1 className="txt3">With thousands of 5-star reviews</h1>
        <div className="col-lg-6 mx-auto">
          <p className="mt-4 mb-0 txt4">
            You can trust what you're buying. You want to choose the best
            inspectors in the industry for your clients
          </p>
        </div>
      </div>
      <div className="container px-4 py-2" id="featured-3">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
          <div className="feature col text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <img className="Svgimg" alt="" src={SvgIcon} />
            </div>
            <h3 className="fs-5">Built on Trust</h3>
            <p>
              Greenworks is the most trusted name in home inspections. We've
              been in the business for over 15 years with a staff of 60+
              inspectors and thousands of satisfied customers.
            </p>
          </div>
          <div className="feature col text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center  bg-gradient fs-2 mb-3">
              <img className="Svgimg" alt="" src={SvgIcon2} />
            </div>
            <h3 className="fs-5">
              Comprehensive
              <br /> Inspections
            </h3>
            <p>
              Greenworks is the most trusted name in home inspections. We've
              been in the business for over 15 years with a staff of 60+
              inspectors and thousands of satisfied customers.
            </p>
          </div>
          <div className="feature col text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
              <img className="Svgimg" alt="" src={SvgIcon3} />
            </div>
            <h3 className="fs-5">
              Fastest Next-day
              <br /> Appointment in <br />
              Texas
            </h3>
            <p>
              Greenworks is the most trusted name in home inspections. We've
              been in the business for over 15 years with a staff of 60+
              inspectors and thousands of satisfied customers.
            </p>
          </div>
          <div className="feature col text-center">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-gradient fs-2 mb-3">
              <img className="Svgimg" alt="" src={SvgIcon4} />
            </div>
            <h3 className="fs-5">
              Home Inspections <br />
              are Fast and Easy
            </h3>
            <p style={{ color: "#404040" }}>
              Greenworks is the most trusted name in home inspections. We've
              been in the business for over 15 years with a staff of 60+
              inspectors and thousands of satisfied customers.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
