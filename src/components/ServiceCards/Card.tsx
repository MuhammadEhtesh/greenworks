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
            <div className="newOrder position-absolute rounded-circle d-flex justify-content-center align-items-center">
              <div className=" bg-white position-absolute rounded-circle d-flex justify-content-center align-items-center imgStyle">
                <img style={{ width: "33px" }} src={logoSvgs} alt="" />
              </div>
            </div>
            <h4
              style={{ fontWeight: "600", fontSize: "15px" }}
              className="my-4 text-white text-center"
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
