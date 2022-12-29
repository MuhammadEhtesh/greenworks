import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logoImage from "../assets/Logos/GreekWorkLogo.png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <>
      <Toolbar className="navbar navbar-light bg-white mt-3">
        <div className="container">
          <a className="navbar-brand">
            <img className="w-50" src={logoImage} alt="" />
          </a>
          <form className="d-flex">
            <div className="d-flex mx-3">
              <IconButton>
                <PhoneIphoneIcon />
              </IconButton>
              <Typography className="mt-2"> (210) 750-4833</Typography>
            </div>
            <Button color="success" variant="contained">
              Book Online
            </Button>
          </form>
        </div>
      </Toolbar>
    </>
  );
}
