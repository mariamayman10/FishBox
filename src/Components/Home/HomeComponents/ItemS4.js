import React from "react";
import "../../../CSS/Home.css";

const ItemS4 = ({ img, p1, p2 }) => {
  return (
    <>
        <div className="section4-item my-2">
          <img src={img} alt="" className="section4-img mb-3" />
          <div>
            <p className="section4-type mb-1">{p1}</p>
            <p className="section4-description">{p2}</p>
          </div>
        </div>
    </>
  );
};

export default ItemS4;
