import React from "react";
import homesvg from "../assets/serviceicons1/home.svg"
import pool from "../assets/serviceicons1/pool.svg"
import construction from "../assets/serviceicons1/construction.svg"
import infrared from "../assets/serviceicons1/infrared.svg"
import phaseinspection from "../assets/serviceicons1/phaseinspection.svg"
import sewerline from "../assets/serviceicons1/sewerline.svg"
import homewarranty from "../assets/serviceicons1/homewarranty.svg"
import inspectionpackages from "../assets/serviceicons1/inspectionpackages.svg"
import investor from "../assets/serviceicons1/investor.svg"
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
                      <img style={{ width: "23px"}} src={homesvg} alt="" />
                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">Home Buyer</p>
                      </div>
                    </div>
                  
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                
                      <img style={{ width: "23px"}} src={pool} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">Pool / Spa</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1 d-flex " style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={construction} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">New Construction</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={infrared} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="position-relative iconname">Infrared <br /><span className="position-absolute" style={{color:"#408D57",fontSize:"12px",whiteSpace:"nowrap",marginTop:"-4px"}} >(Thermal Imaging)</span></p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={phaseinspection} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">Phase Inpection</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={sewerline} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">Sewer Line</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={homewarranty} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">Home Warranty</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={inspectionpackages} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">Inspection Packages</p>
                      </div>
                    </div>
                </div>
                <div className="col-6 ">
                <div className="row">
                      <div className="col-1" style={{width:"36px"}}> <span>
                      <img style={{ width: "23px"}} src={investor} alt="" />

                    </span>{" "}</div>
                      <div className="col d-flex justify-content-start">
                        <p className="iconname">Investor</p>
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
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
          <div className="sideimage2 mt-5" style={{height:"500px",width:"340px"}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services1;
