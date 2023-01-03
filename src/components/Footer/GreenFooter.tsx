import React from "react";
import "./GreenFooter.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { BsInstagram } from "react-icons/bs";

import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";
import logo from "../../assets/Images/Footer/logo-white.png";
function GreenFooter() {
  return (
    <div className="container-fluid footer">
      <MDBFooter
        style={{ height: "50%", width: "100%" }}
        className="mt-5 text-center text-white text-lg-left"
      >
        <MDBContainer className="p-4">
          <MDBRow>
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled d-flex flex-column align-items-start">
                <img height={70} src={logo} alt="" />
                <li className="mt-2">
                  <p
                    className="text-start p-0 m-0 mt-3"
                    style={{ color: "#82F4A4" }}
                  >
                    For Inspection
                  </p>
                  <h3 className="text-white text-start">(210) 750-4830</h3>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled text-start">
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    INSPECT & INVESTIGATE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    ENGINEER & DESIGN
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    ENVIROMENTAL CONSULTING
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    PEST AND TERMINATE SOLUTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    HANDYMAN & HOME SOLUTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    CONSULTING AND CONNECTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    PACKAGES
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0 ">
              <ul className="list-unstyled text-start">
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    INSPECT & INVESTIGATE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    ENGINEER & DESIGN
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    ENVIROMENTAL CONSULTING
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    PEST AND TERMINATE SOLUTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    HANDYMAN & HOME SOLUTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    CONSULTING AND CONNECTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    className="text-white text-start"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    PACKAGES
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="3"
              md="6"
              sm="6"
              className="mb-4 mb-md-0 d-flex align-items-end"
            >
              <ul className="list-unstyled">
                <li>
                  <p className=" text-start" style={{ color: "#82F4A4" }}>
                    OPEN 7 DAYS A WEEK
                  </p>
                </li>
                <li>
                  <p
                    className="text-white text-start"
                    style={{ fontSize: "12px" }}
                  >
                    Weekdays: 7:00am - 8:00pm
                  </p>
                </li>
                <li>
                  <p
                    className="text-white text-start"
                    style={{ fontSize: "12px" }}
                  >
                    Weekends: 8:00am - 8:00pm
                  </p>
                </li>
                <li>
                  <ul className="list-unstyled d-flex fs-4">
                    <li
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle text-dark d-flex justify-content-center align-items-center bg-white fs-6"
                    >
                      <FaFacebookF />
                    </li>
                    <li
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle text-dark d-flex justify-content-center align-items-center bg-white fs-6"
                    >
                      <FaTwitter />
                    </li>
                    <li
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle text-dark d-flex justify-content-center align-items-center bg-white fs-6 fw-bold"
                    >
                      <BsInstagram />
                    </li>
                    <li
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle text-dark d-flex justify-content-center align-items-center bg-white fs-6 fw-bold"
                    >
                      <FaGooglePlusG />
                    </li>
                  </ul>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </MDBFooter>
    </div>
  );
}

export default GreenFooter;
