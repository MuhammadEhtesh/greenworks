// import { Typography } from "@material-ui/core";
import { Button } from "@mui/material";
import Navbar from "../Navbar/Navbar";
// import React from "react";
import "./ScopeSpeed.css";
const ScopeSpeedService = () => {
  return (
    <div className="bgColorStyle">
      <div>
        <Navbar />
        <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center">
          <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 mt-2">
            <div className="">
              <h1 className="text-success">Scope. Speed. Service.</h1>
              <p>Magnifying your real Estate Peace of Mind</p>
            </div>
            <div className="">
              <form
                style={{ width: "270px" }}
                className="form p-2 bg-color rounded-3"
              >
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    textAlign: "center",
                    marginTop: "10px",
                  }}
                >
                  SCHADUAL AN INSPACTION
                </p>
                <input
                  type="text"
                  placeholder="Name*"
                  className="form-control form-control-sm mb-2 rounded-1"
                />
                <input
                  type="text"
                  placeholder="Email*"
                  className="form-control form-control-sm mb-2 rounded-1"
                />
                <input
                  type="text"
                  placeholder="Phone*"
                  className="form-control form-control-sm mb-2 rounded-1"
                />
                <select
                  defaultValue="1"
                  className="form-select form-control form-control-sm mb-2 rounded-1"
                  data-kt-select2="true"
                  data-placeholder="Select option"
                  data-allow-clear="true"
                >
                  <option>Type of Inspection</option>
                  <option>Type 1</option>
                  <option>Type 2</option>
                  <option>Type 3</option>
                </select>
                <span className="d-flex justify-content-end">
                  <Button
                    color="error"
                    variant="contained"
                    className="ActiveEffect"
                  >
                    Book Online
                  </Button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-10 mt-3">
        <p className="text-center text-success ">Available 7 Days a Week</p>
      </div> */}
    </div>
  );
};

export default ScopeSpeedService;
