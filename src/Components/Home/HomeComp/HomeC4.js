import React from "react";
import "../../../CSS/Home.css";

const HomeC4 = ({ img, p1, p2 }) => {
  return (
    <>
        <div className="Home__section4-item my-2">
          <img src={img} alt="" className="Home__section4-img mb-3" />
          <div>
            <p className="Home__section4-type mb-1">{p1}</p>
            <p className="Home__section4-description">{p2}</p>
          </div>
        </div>
    </>
  );
};

export default HomeC4;
