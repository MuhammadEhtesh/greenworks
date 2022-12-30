import { Button } from "@mui/material";
import React from "react";
import bgImage from "../../assets/Images/QueetBgImage.png";

const QueetForm = () => {
  return (
    <>
      <div
        className="row m-0 p-0 py-5 text-white"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="col-sm-12 col-md-7 col-lg-7 d-flex justify-content-end">
          <div style={{ width: "max-content" }}>
            <div style={{ width: "max-content" }}>
              <p className="text-center mb-1">SCHEDULE APPOINTMENT OR</p>
              <h3>REQUEST INSPECTION QUOTE</h3>
            </div>
            <form>
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <input
                    type="text"
                    placeholder="FIRST NAME*"
                    className=" col-sm-12 col-md-4 col-lg-4 form-control form-control-sm mb-2 rounded-2 bg-light"
                  />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <input
                    type="text"
                    placeholder="LAST NAME*"
                    className="col-sm-12 col-md-4 col-lg-4 form-control form-control-sm mb-2 rounded-2 bg-light"
                  />
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                  <input
                    type="text"
                    placeholder="PHONE*"
                    className="col-sm-12 col-md-4 col-lg-4 form-control form-control-sm mb-2 rounded-2 bg-light"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 ">
                  <input
                    type="text"
                    placeholder="EMAIL*"
                    className="form-control form-control-sm mb-2 rounded-2 bg-light"
                  />
                </div>
                <div className="col-sm-12 col-md-8 col-lg-8 ">
                  <input
                    type="text"
                    placeholder="ADDRESS OF HOME TO BE INSPECTED"
                    className="form-control form-control-sm mb-2 rounded-2 bg-light"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <textarea
                    className="form-control form-control-sm mb-2 rounded-2 bg-light"
                    rows={4}
                    placeholder="ADDITIONAL INFORMATION"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <span className="d-flex justify-content-start">
                    <Button color="error" variant="contained">
                      Submit
                    </Button>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default QueetForm;
