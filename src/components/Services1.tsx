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
import newimg from "../assets/Images/Mask group (4).png"
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
                        <p className="iconname">Construction</p>
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
                        <p className="iconname">Phase</p>
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
                        <p className="iconname">Packages</p>
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
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center align-items-start">
          <div className="sideimage2 d-flex justify-content-center mt-5 mt-lg-0 mt-md-5 mt-sm-5" style={{height:"470px",width:"340px"}}>
            <img className="mt-2" height={170} src={newimg} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services1;
