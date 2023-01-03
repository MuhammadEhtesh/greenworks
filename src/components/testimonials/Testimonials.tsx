import React from "react";
import "./Tesimonials.css";
import Topping4 from "../../assets/Images/OtherPictures/toppng 4.jpg";
import Ellipse from "../../assets/Images/OtherPictures/Ellipse 18.jpg";
import StarIcon from "@mui/icons-material/Star";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <div className="bg-color2">
        <div className="pricing-header pb-md-4 mx-auto text-center pt-5">
          <h1 className="txtSzng">Clients TESTIMONIALS</h1>
          <h1 className="txtSzng1">What our client saying</h1>
        </div>
        <div className="d-flex justify-content-center ">
          <div className="row container">
            <div className="col-lg-4 col-md-6 col-sm-12 px-3 pb-4 col-12">
              <div className="card  rounded-3 border-0">
                <div className="pt-3 d-flex justify-content-between position-relative">
                  <div className="position-absolute bg-white rounded-5 text-center formQuotePosition">
                    <FaQuoteLeft className="mt-3" />
                  </div>
                  <p
                    style={{
                      fontWeight: "600",
                      fontStyle: "normal",
                      fontSize: "16px",
                    }}
                    className="px-3"
                  >
                    Aug 11, 2022
                  </p>
                  <div
                    style={{
                      marginRight: "35px",
                      height: "35px",
                    }}
                  >
                    <h4>
                      <span style={{ color: "#518af2" }}>G</span>
                      <span style={{ color: "#e74b41" }}>o</span>
                      <span style={{ color: "#fdc542" }}>o</span>
                      <span style={{ color: "#518af2" }}>g</span>
                      <span style={{ color: "#39a453" }}>l</span>
                      <span style={{ color: "#e74b41" }}>e</span>
                    </h4>
                    <div className="d-flex mx-1">
                      <p className=" text-muted reviewsStyle">Reviews</p>
                      <div className="">
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 pt-0 mt-0" style={{ color: "orange" }}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="card-body">
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "300",
                      fontSize: "18px",
                    }}
                  >
                    Hi , Martin has inspected my home for predrywall. The way he
                    sees the things are good. Overall he identified good things
                    as part of my home inspection. I would recommend his service
                  </p>
                </div>
                <div>
                  <img
                    className="mx-2"
                    style={{ height: "50px" }}
                    src={Ellipse}
                  />
                  <span
                    className="mx-2 fw-bolder"
                    style={{
                      color: " #408D57",
                    }}
                  >
                    Shane
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 px-3 pb-4 col-12">
              <div className="card  rounded-3 border-0">
                <div className="pt-3 d-flex justify-content-between position-relative text-center">
                  <div className="position-absolute bg-white rounded-5 text-center formQuotePosition">
                    <FaQuoteLeft className="mt-3" />
                  </div>
                  <p
                    style={{
                      fontWeight: "600",
                      fontStyle: "normal",
                      fontSize: "16px",
                    }}
                    className="px-3"
                  >
                    Aug 10, 2022
                  </p>
                  {/* <span>
                  <img
                    style={{
                      marginRight: "35px",
                      height: "35px",
                    }}
                    src={Topping}
                  />
                </span> */}
                  <div
                    style={{
                      marginRight: "35px",
                      height: "35px",
                    }}
                  >
                    <h4>
                      <span style={{ color: "#518af2" }}>G</span>
                      <span style={{ color: "#e74b41" }}>o</span>
                      <span style={{ color: "#fdc542" }}>o</span>
                      <span style={{ color: "#518af2" }}>g</span>
                      <span style={{ color: "#39a453" }}>l</span>
                      <span style={{ color: "#e74b41" }}>e</span>
                    </h4>
                    <div className="d-flex mx-1">
                      <p className=" text-muted reviewsStyle">Reviews</p>
                      <div className="">
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 pt-0 mt-0" style={{ color: "orange" }}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                {/* <StarIcon style={{color: "orange"}} /> */}
                <div className="card-body">
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "300",
                      fontSize: "18px",
                    }}
                  >
                    Colton is a rock star ! He has an eye for details, catches
                    issues with the house which most might miss. A great
                    friendly person and takes time out to explain the issues in
                    details. Outstanding !
                  </p>
                </div>
                <div>
                  <img
                    className="mx-2"
                    style={{ height: "50px" }}
                    src={Ellipse}
                  />
                  <span
                    className="mx-2 fw-bolder"
                    style={{
                      color: " #408D57",
                    }}
                  >
                    Anand M.
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 px-3 pb-4 col-12">
              <div className="card  rounded-3 border-0">
                <div className="pt-3 d-flex justify-content-between position-relative text-center">
                  <div className="position-absolute bg-white rounded-5 text-center formQuotePosition">
                    <FaQuoteLeft className="mt-3" />
                  </div>
                  <p
                    style={{
                      fontWeight: "600",
                      fontStyle: "normal",
                      fontSize: "16px",
                    }}
                    className="px-3"
                  >
                    Aug 9, 2022
                  </p>
                  <div
                    style={{
                      marginRight: "35px",
                      height: "35px",
                    }}
                  >
                    <h4>
                      <span style={{ color: "#518af2" }}>G</span>
                      <span style={{ color: "#e74b41" }}>o</span>
                      <span style={{ color: "#fdc542" }}>o</span>
                      <span style={{ color: "#518af2" }}>g</span>
                      <span style={{ color: "#39a453" }}>l</span>
                      <span style={{ color: "#e74b41" }}>e</span>
                    </h4>
                    <div className="d-flex mx-1">
                      <p className=" text-muted reviewsStyle">Reviews</p>
                      <div className="">
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                        <StarIcon className="starIconStyle" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 pt-0 mt-0" style={{ color: "orange" }}>
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
                <div className="card-body">
                  <p
                    style={{
                      fontFamily: "poppins",
                      fontStyle: "normal",
                      fontWeight: "300",
                      fontSize: "18px",
                    }}
                  >
                    Randall did a great job. Thorough inspection and kind enough
                    to explain all findings. I would definitely recommend him to
                    friends and family. Thanks !!
                  </p>
                </div>
                <div>
                  <img
                    style={{ height: "50px" }}
                    className="mx-2"
                    src={Ellipse}
                  />
                  <span
                    className="mx-2 fw-bolder"
                    style={{
                      color: " #408D57",
                    }}
                  >
                    Ashokkumar P
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
