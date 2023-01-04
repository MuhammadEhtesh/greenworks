import React from "react";
import bgImage from "../../assets/Images/servicesPics/local.png";
import "./localpic.css"
const Local = () => {
  return (
    <div className="mt-5 waiter-bg-image"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition:"center",
        backgroundSize: "cover",
        width: "100%",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
};

export default Local;
