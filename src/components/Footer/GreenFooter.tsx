import React from "react";
import "./GreenFooter.css";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { BsInstagram } from "react-icons/bs";

import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/Images/Footer/logo-white.png";
function GreenFooter() {
  return (
    <div className="container-fluid footer ">
      <MDBFooter
        style={{ height: "50%", width: "100%" }}
        className="mt-5 text-center text-white text-lg-left"
      >
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0 ">
              <ul className="list-unstyled d-flex flex-column align-items-center text-center">
                <img height={70} src={logo} alt="" />
                <li className="mt-2">
                  <p
                    className="text-center p-0 m-0 mt-3"
                    style={{ color: "#82F4A4" }}
                  >
                    For Inspection
                  </p>
                  <h3 className="text-white text-center">(210) 750-4830</h3>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0">
              <ul className="list-unstyled text-center">
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    INSPECT & INVESTIGATE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    ENGINEER & DESIGN
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    ENVIROMENTAL CONSULTING
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    PEST AND TERMINATE SOLUTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    HANDYMAN & HOME SOLUTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    CONSULTING AND CONNECTIONS
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    PACKAGES
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" sm="6" className="mb-4 mb-md-0 ">
              <ul className="list-unstyled text-center">
                {/* <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    INSPECT & INVESTIGATE
                  </a>
                </li> */}
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    AUSTIN OFFICE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    CORPUS CHRISTI OFFICE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    DALLAS OFFICE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    FORT WORTH OFFICE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    FRISCO OFFICE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    HOUSTON OFFICE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    SAN ANTONIO OFFICE
                  </a>
                </li>
                <li className="mt-2">
                  <a
                    href="#"
                    className="text-white text-center"
                    style={{ fontSize: "12px", textDecoration: "none" }}
                  >
                    WEST TX OFFICE
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol
              lg="3"
              md="6"
              sm="6"
              className="mb-4 mb-md-0 d-flex align-items-end justify-content-center"
            >
              <ul className="list-unstyled">
                <li>
                  <p className=" text-center" style={{ color: "#82F4A4" }}>
                    OPEN 7 DAYS A WEEK
                  </p>
                </li>
                <li>
                  <p
                    className="text-white text-center"
                    style={{ fontSize: "12px" }}
                  >
                    Weekdays: 7:00am - 8:00pm
                  </p>
                </li>
                <li>
                  <p
                    className="text-white text-center"
                    style={{ fontSize: "12px" }}
                  >
                    Weekends: 8:00am - 8:00pm
                  </p>
                </li>
                <li>
                  <ul className="list-unstyled d-flex fs-4">
                    <a
                      href="#"
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle d-flex justify-content-center align-items-center fs-6 IconBackground "
                    >
                      <FaFacebookF className="IconHover" />
                    </a>
                    <a
                      href="#"
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle d-flex justify-content-center align-items-center fs-6 IconBackground "
                    >
                      <FaTwitter className="IconHover" />
                    </a>
                    <a
                      href="#"
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle d-flex justify-content-center align-items-center fs-6 IconBackground  fw-bold"
                    >
                      <BsInstagram className="IconHover" />
                    </a>
                    <a
                      href="#"
                      style={{ height: "30px", width: "30px" }}
                      className="mx-1 rounded-circle d-flex justify-content-center align-items-center fs-6 IconBackground  fw-bold"
                    >
                      <FaLinkedinIn className="IconHover" />
                    </a>
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
