import React from "react";
import "./Tesimonials.css";
import Topping from "../../assets/Images/OtherPictures/toppng 3.jpg";
import Topping4 from "../../assets/Images/OtherPictures/toppng 4.jpg";
import Ellipse from "../../assets/Images/OtherPictures/Ellipse 18.jpg";

const Testimonials = () => {
  return (
    <>
      <div className="container-fluid bg-color">
        <div className="pricing-header pb-md-4 mx-auto text-center pt-5">
          <h1 className="txtSzng">Clients TESTIMONIALS</h1>
          <h1 className="txtSzng1">What our client saying</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-3 py-5">
          <div className="col-3 d-flex justify-content-end">
            <div
              className="card  rounded-3 shadow-sm"
              style={{ width: "300px" }}
            >
              <div className="pt-3 d-flex justify-content-between">
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
                <span>
                  <img
                    style={{
                      marginRight: "35px",
                      height: "35px",
                    }}
                    src={Topping}
                  />
                </span>
              </div>
              <div className="p-3 pt-0 mt-0">
                <img
                  className="pt-0 mt-0"
                  style={{ height: "15px" }}
                  src={Topping4}
                />
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
                  sees the things are good. Overall he identified good things as
                  part of my home inspection. I would recommend his service
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
          <div className="col-3 d-flex justify-content-center">
            <div
              className="card  rounded-3 shadow-sm"
              style={{ width: "300px" }}
            >
              <div className="pt-3 d-flex justify-content-between">
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
                <span>
                  <img
                    style={{
                      marginRight: "35px",
                      height: "35px",
                    }}
                    src={Topping}
                  />
                </span>
              </div>
              <div className="p-3 pt-0 mt-0">
                <img
                  className="pt-0 mt-0"
                  style={{ height: "15px" }}
                  src={Topping4}
                />
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
                  Colton is a rock star ! He has an eye for details, catches
                  issues with the house which most might miss. A great friendly
                  person and takes time out to explain the issues in details.
                  Outstanding !
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
          <div className="col-3 d-flex justify-content-start">
            <div
              className="card  rounded-3 shadow-sm"
              style={{ width: "300px" }}
            >
              <div className="pt-3 d-flex justify-content-between">
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
                <span>
                  <img
                    style={{
                      marginRight: "35px",
                      height: "35px",
                    }}
                    src={Topping}
                  />
                </span>
              </div>
              <div className="p-3 pt-0 mt-0">
                <img
                  className="pt-0 mt-0"
                  style={{ height: "15px" }}
                  src={Topping4}
                />
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
                  Ashokkumar P
                </span>
              </div>
            </div>
          </div>
          {/* <div className='col-3 d-flex justify-content-center'>
            <div
              className='card mb-4 rounded-3 shadow-sm border-primary'
              style={{ width: '300px', marginRight: '45%' }}
            >
              <div className='card-header py-3'>
                <h4 className='my-0 fw-normal'>Enterprise</h4>
              </div>
              <div className='card-body'>
                <h1 className='card-title pricing-card-title'>
                  $29<small className='text-muted fw-light'>/mo</small>
                </h1>
                <ul className='list-unstyled mt-3 mb-4'>
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type='button' className='w-100 btn btn-lg'>
                  Contact us
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
