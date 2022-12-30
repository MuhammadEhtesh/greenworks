import React from 'react'
import "./GreenFooter.css"
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
  } from 'mdb-react-ui-kit';
  
  import { FaFacebookF,FaTwitter,FaGooglePlusG } from "react-icons/fa";
import logo from "../../assets/Images/Footer/logo-white.png"
function GreenFooter() {
  return (
    <div className="container-fluid footer">
    <MDBFooter style={{height:"50%",width:"100%"}} className='mt-5 text-center text-white text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='3' md='6' sm="6" className='mb-4 mb-md-0'>

            <ul className='list-unstyled d-flex flex-column align-items-start'>
           <img height={70} src={logo} alt="" />
              <li>
                <p className='text-start p-0 m-0 mt-3' style={{color:"#82F4A4"}}>
                  For Inspection
                </p>
                <h3 className='text-white text-start'>
                  (210) 750-4830
                </h3>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' sm="6" className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li>
                <p className='text-white text-start' style={{fontSize:"12px"}}>
                    INSPECT & INVESTIGATE
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    ENGINEER & DESIGN
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    ENVIROMENTAL CONSULTING
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    PEST AND TERMINATE SOLUTIONS
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    HANDYMAN & HOME SOLUTIONS
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    CONSULTING AND CONNECTIONS
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    PACKAGES
                </p>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' sm="6" className='mb-4 mb-md-0'>
          <ul className='list-unstyled'>
              <li>
                <p className='text-white text-start' style={{fontSize:"12px"}}>
                    INSPECT & INVESTIGATE
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    ENGINEER & DESIGN
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    ENVIROMENTAL CONSULTING
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    PEST AND TERMINATE SOLUTIONS
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    HANDYMAN & HOME SOLUTIONS
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    CONSULTING AND CONNECTIONS
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    PACKAGES
                </p>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' sm="6"  className='mb-4 mb-md-0'>

            <ul className='list-unstyled'>
              <li>
              <p className=' text-start'style={{color:"#82F4A4"}}>
                    OPEN 7 DAYS A WEEK
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    Weekdays: 7:00am - 8:00pm
                </p>
              </li>
              <li>
              <p className='text-white text-start' style={{fontSize:"12px"}}>
                    Weekends: 8:00am - 8:00pm
                </p>
              </li>
              <li>
              <ul className='list-unstyled d-flex fs-4'>
                        <li className='mx-1'><FaFacebookF/></li>
                        <li className='mx-1'><FaTwitter/></li>
                        <li className='mx-1'><FaGooglePlusG/></li>
                    </ul>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  </div>
  )
}

export default GreenFooter