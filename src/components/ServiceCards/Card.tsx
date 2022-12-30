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
      <Card sx={{ maxWidth: "35vh", minWidth: "35vh" }} className="mb-2">
        <CardMedia image={cardImgSrcs} className=" d-flex alighnment">
          <CardActions className="align-self-end position-relative justify-content-center cardStyle">
            <div className="position-absolute p-2 bg-white rounded-5 imgStyle">
              <img src={logoSvgs} alt="" />
            </div>
            <Typography className="py-1 text-white text-center">
              {CardTexts}
            </Typography>
          </CardActions>
        </CardMedia>
      </Card>
    </div>
  );
};

export default Cards;
