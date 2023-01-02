import React from "react";
import homesvg from "../assets/serviceicons1/home.svg"
import pool from "../assets/serviceicons1/pool.svg"
import construction from "../assets/serviceicons1/construction.svg"
import infrared from "../assets/serviceicons1/infrared.svg"
import phaseinspection from "../assets/serviceicons1/phaseinspection.svg"
import sewerline from "../assets/serviceicons1/sewerline.svg"

import Image1 from "../assets/Images/servicesPics/Rectangle 54.png";
import Image2 from "../assets/Images/servicesPics/Rectangle 55.png";
import Image3 from "../assets/Images/servicesPics/Rectangle 56.png";
import "./Services.css";
function Services2() {
  return (
    <div style={{ backgroundColor: "#FAFAFA" }} className="container-fluid">
      <div className="container">
        <div className="row p-5">
        <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-end">
        {/* <img className="mx-lg-3 mx-md-0" height={500} src={image} alt="" /> */}
        <div className="sideimage1" style={{height:"410px",width:"340px"}}></div>
            </div>
          <div className="col-lg-7 col-md-12 col-sm-12 d-flex justify-content-start align-items-center">
            <div className="col-lg-9 col-md-12 col-sm-12">
              <div className="row">
                <p style={{ fontSize: "20px" }} className="fw-500 my-0 p-0 mt-3">
                  Services We Provide
                </p>
                <h1 style={{ fontSize: "44px" }} className="fw-bold my-0 p-0">
                  Residential Services
                </h1>
                <h4
                  style={{ fontSize: "26px", color: "#AA0101" }}
                  className="my-0 p-0"
                >
                  Types of residential home inspections
                </h4>
              </div>
              <div className="row mt-4">
                <div className="col-6 ">
                  
                    <div className="row">
                      <div className="col-1 " style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={homesvg} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p style={{fontSize:"14px"}}>PCA</p>
                      </div>
                    </div>
                  
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={pool} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p style={{fontSize:"14px"}}>Damage Assessment</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={construction} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p style={{fontSize:"14px"}}>Multifamily</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={infrared} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p style={{fontSize:"14px"}}>Enviromental</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px",color:"black"}} src={phaseinspection} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p style={{fontSize:"14px"}}>Sutructural Engineering</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={sewerline} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p style={{fontSize:"14px"}}>Draws</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                     <img style={{ width: "23px"}} src={pool} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p style={{fontSize:"14px"}}>Entry Code</p>
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
          
        </div>
      </div>
    </div>
  );
}

export default Services2;
