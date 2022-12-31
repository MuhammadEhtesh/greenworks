import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logoImage from "../../assets/Logos/GreekWorkLogo.png";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <>
      <Toolbar className="navbar navbar-light bg-transparent">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img className="w-50" src={logoImage} alt="" />
          </a>
          <form className="d-flex">
            <div className="d-flex mx-3">
              <IconButton className="transitionEffect">
                <PhoneIphoneIcon />
              </IconButton>
              <Typography className="mt-2"> (210) 750-7584</Typography>
            </div>
            <Button
              color="success"
              variant="contained"
              className="transitionEffect"
            >
              Book Online
            </Button>
          </form>
        </div>
      </Toolbar>
    </>
  );
}
