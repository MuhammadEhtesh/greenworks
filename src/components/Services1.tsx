import React from "react";
import { FaHome, FaMoneyBillAlt } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { BsFillSunriseFill } from "react-icons/bs";
import { MdPool } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { GiTeePipe, GiArchiveResearch } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";

import Image1 from "../assets/Images/servicesPics/Rectangle 50.png";
import Image2 from "../assets/Images/servicesPics/Rectangle 51.png";
import Image3 from "../assets/Images/servicesPics/Rectangle 52.png";
import "./Services.css";
function Services1() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }} className="container-fluid">
      <div className="container">
        <div className="row p-5">
          <div className="col-lg-7 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="row">
                <p style={{ fontSize: "20px" }} className="fw-500 my-0 p-0">
                  Services We Provide
                </p>
                <h1 style={{ fontSize: "44px" }} className="fw-bold my-0 p-0">
                  Residential Services
                </h1>
                <h4
                  style={{ fontSize: "26px", color: "#AA0101" }}
                  className="my-0 p-0"
                >
                  types of residential home inspections
                </h4>
              </div>
              <div className="row mt-4">
                <div className="col-6 ">
                  
                    <div className="row">
                      <div className="col-1 " style={{width:"36px"}}> <span>
                      <FaHome
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Home Buyer</p>
                      </div>
                    </div>
                  
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <FaHome
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Pool / Spa</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <FaMoneyBillAlt
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>New Construction</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <BsTools
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Infrared</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <BsFillSunriseFill
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Phase Inpection</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <MdPool
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Sewer Line</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <SlBadge
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Home Warranty</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <GiTeePipe
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Inspection Packages</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <BiSearchAlt
                        className="text-success mx-1"
                        style={{ fontSize: "23px" }}
                      />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p>Investor</p>
                      </div>
                    </div>
                </div>
              </div>
              <div className="row d-flex justify-content-between">
                <div className="col-3">
                  <img className="images " src={Image3} alt="" />
                </div>
                <div className="col-3">
                  <img className="images " src={Image2} alt="" />
                </div>
                <div className="col-3">
                  <img className="images " src={Image1} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="imgsection1 col-lg-5 col-md-12 col-sm-12 d-flex justify-content-start align-items-center">
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services1;
