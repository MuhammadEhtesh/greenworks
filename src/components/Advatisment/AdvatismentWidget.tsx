import React from "react";
import Button from "@mui/material/Button";
import bgImage from "../../assets/Images/Electric.png";
import bgImage2 from "../../assets/Images/employee.png";
import "./Advatisment.css";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

const AdvatismentWidget = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center py-5"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <div className="d-flex justify-content-center">
            <div className="text-center text-success">
              <h4>
                GreenWorks Inspections are
                <br /> your accurate real-time decision-making <br />
                tool for home inspection in Texas
              </h4>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <p>
                GreenWorks provides a full scope of home inspection services to
                suit your <br /> needs. Whether you are purchasing a pre-owned
                home, building a home from <br /> the ground up or an investor
                doing their due diligence; we have the property <br />{" "}
                inspection resource for you!
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Button color="error" variant="contained">
              REQUEST A CONSULTATION
            </Button>
          </div>
        </div>
      </div>
      {/* Second Section Start */}
      <div className="">
        <div
          style={{
            backgroundImage: `url(${bgImage2})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="d-flex justify-content-end text-white py-5"
        >
          <div className=" col-lg-5 col-md-8 col-sm-10 mt-5 ">
            <h1>
              Get Peace of Mind <br /> with Greenworks
            </h1>
            <h4 className="text-success">
              Residential & Commercial Inspection
            </h4>
            <div className="d-flex ">
              <IconButton className="text-success">
                <AddIcCallIcon fontSize="large" />
              </IconButton>
              <h3 className="mt-2 fw-bolder"> (210) 750-4833</h3>
            </div>
          </div>
        </div>
        <div className="text-white py-3 bg-success text-center ">
          <div
            className="d-flex justify-content-center position-relative"
            style={{ top: "-16px" }}
          >
            <div className=" text-center text-white position-absolute clipiPath px-4 py-1">
              PROUDLY SERVED
            </div>
          </div>
          <p className="mt-5">
            Amarillo • Austin • Beaumont • College Station • Corpus Christi •
            Dallas • Fort Worth • Frisco <br /> • Houston • Lubbock • Midland •
            San Antonio • Waco and All Surrounding Areas
          </p>
        </div>
      </div>
    </>
  );
};

export default AdvatismentWidget;
