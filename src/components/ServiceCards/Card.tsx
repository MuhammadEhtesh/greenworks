import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./cardStyle.css";

const Cards = (props: {
  logoSvgs: string;
  cardImgSrcs: string;
  CardTexts: string;
}) => {
  const { logoSvgs, cardImgSrcs, CardTexts } = props;
  return (
    <div>
      <Card
        sx={{ maxWidth: "30vh", minWidth: "30vh" }}
        className="mb-2 transitionEffect"
      >
        <CardMedia image={cardImgSrcs} className="d-flex alighnment">
          <CardActions className="align-self-end position-relative justify-content-center cardStyle">
            <div className="position-absolute d-flex justify-content-center align-items-center bg-white rounded-circle imgStyle">
              <img style={{ width: "40px" }} src={logoSvgs} alt="" />
            </div>
            <h4
              style={{ fontWeight: "600", fontSize: "15px" }}
              className="py-1 text-white text-center"
            >
              {CardTexts}
            </h4>
          </CardActions>
        </CardMedia>
      </Card>
    </div>
  );
};

export default Cards;
