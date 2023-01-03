import React from "react";
import bgImage from "../../assets/Images/servicesPics/local.png";
const Local = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        width: "100%",
        height: "300px",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Local;
