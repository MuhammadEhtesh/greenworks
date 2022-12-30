import React from "react";
import Cards from "./Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import cardImage1 from "../../assets/Images/home.png";
import cardImage2 from "../../assets/Images/ENGINEER.png";
import cardImage3 from "../../assets/Images/ENVIRONMENTAL.png";
import cardImage4 from "../../assets/Images/pest.png";
import cardImage5 from "../../assets/Images/HANDYMAN.png";
import cardImage6 from "../../assets/Images/CONSULTING.png";
import homeSvg1 from "../../assets/Svg/home.svg";
import homeSvg2 from "../../assets/Svg/ENGINEER.svg";
import homeSvg3 from "../../assets/Svg/ENVIRONMENTAL.svg";
import homeSvg4 from "../../assets/Svg/PEST.svg";
import homeSvg5 from "../../assets/Svg/HANDYMAN.svg";
import homeSvg6 from "../../assets/Svg/CONSULTING.svg";
import { CardImg } from "react-bootstrap";

const ServiceCard = () => {
  const cardList = [
    {
      logoSvg: homeSvg1,
      cardImg: cardImage1,
      cardtext: "INSPECT & INVESTIGATE",
    },
    {
      logoSvg: homeSvg2,
      cardImg: cardImage2,
      cardtext: "ENGINEER & DESIGN",
    },
    {
      logoSvg: homeSvg3,
      cardImg: cardImage3,
      cardtext: "ENVIRONMENTAL CONSULTING",
    },
    {
      logoSvg: homeSvg4,
      cardImg: cardImage4,
      cardtext: "PEST & TERMITE SOLUTIONS",
    },
    {
      logoSvg: homeSvg5,
      cardImg: cardImage5,
      cardtext: "HANDYMAN & HOME SERVICES",
    },
    {
      logoSvg: homeSvg6,
      cardImg: cardImage6,
      cardtext: "CONSULTING & CONNECTIONS",
    },
  ];
  return (
    <div>
      <div className="col-10">
        <p className="text-center text-success mb-1">Available 7 Days a Week</p>
        <h3 className="text-center fw-bolder">How We Serve You</h3>
      </div>
      <div>
        {/* <Cards
          logoSvgs={homeSvg}
          cardImgSrcs={cardImage1}
          CardTexts="INSPECT& INVESTIGATE"
        /> */}
        <div className="d-flex justify-content-end mb-4">
          <div className="container mt-5 ">
            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={2}
                className="d-flex justify-content-center"
              >
                {cardList.map((item, index) => (
                  <Grid item key={index}>
                    <Cards
                      logoSvgs={item.logoSvg}
                      cardImgSrcs={item.cardImg}
                      CardTexts={item.cardtext}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
