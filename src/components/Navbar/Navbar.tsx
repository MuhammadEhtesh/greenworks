import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logoImage from "../../assets/Logos/GreekWorkLogo.png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Button from "@mui/material/Button";
import "../ScopeSpeed/ScopeSpeed.css"

export default function Navbar() {
  return (
    <>
      <Toolbar className="navbar navbar-light bg-transparent py-4">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="w-50" src={logoImage} alt="" />
          </a>
          <form className="d-flex justify-content-between width-100">
            <div className="d-flex mx-0 mx-xxl-4 mx-xl-4 mx-lg-4">
              <IconButton className="transitionEffect">
                <PhoneIphoneIcon />
              </IconButton>
              <Typography className="mt-2 num-text"> (210) 750-7584</Typography>
            </div>
            <Button
              color="success"
              variant="contained"
              className="transitionEffect book-btn"
            >
              Book Online
            </Button>
          </form>
        </div>
      </Toolbar>
    </>
  );
}
