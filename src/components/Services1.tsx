import React from "react";
import { FaHome,FaMoneyBillAlt } from "react-icons/fa";
import { BsTools } from "react-icons/bs";
import { BsFillSunriseFill } from "react-icons/bs";
import { MdPool } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { GiTeePipe,GiArchiveResearch } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";


import Image1 from "../assets/Images/services/Rectangle 50.png"
import Image2 from "../assets/Images/services/Rectangle 51.png"
import Image3 from "../assets/Images/services/Rectangle 52.png"
import Image4 from "../assets/Images/services/Rectangle 49.png"
import "./Services.css"
function Services1() {
  return (
    <div style={{backgroundColor:"#FAFAFA"}} className="container-fluid">
    <div className="container">

    <div  className="row p-5">
    <div className="col-7 d-flex justify-content-center align-items-center">
        <div className="col-9">
          <div className="row">
            <p style={{fontSize:"20px"}} className="fw-500 my-0 p-0">Services We Provide</p>
            <h1 style={{fontSize:"44px"}} className="fw-bold my-0 p-0">Residential Services</h1>
            <h4 style={{fontSize:"26px",color:"#AA0101"}} className="my-0 p-0">types of residential home inspections</h4>
          </div>
          <div className="row mt-4">
            <div className="col-6 ">
              <p>
                <span>
                  <FaHome className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Home Buyer
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <MdPool className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Pool / Spa
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <BsTools className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                New Construction
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <BsFillSunriseFill className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Infrared
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <BiSearchAlt className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Phase Inspection
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <GiTeePipe className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Sewer Line
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <SlBadge className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Home Warranty
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <GiArchiveResearch className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Inspection Packages
              </p>
            </div>
            <div className="col-6 ">
              <p>
                <span>
                  <FaMoneyBillAlt className="text-success mx-1" style={{fontSize:"23px"}} />
                </span>{" "}
                Investor
              </p>
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
        <div className="col-5 d-flex justify-content-start align-items-center">
        <img className="mx-2" style={{height:"530px"}} src={Image4} alt="" />
      </div>
      
    

    </div>
    </div>
    </div>
  );
}

export default Services1;
