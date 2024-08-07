import React from "react";
import "../../../CSS/Home.css";

const HomeS6 = () => {
  return (
    <div className="Home__section6 py-4 m-auto">
        <p className="Home__section6-title">SIGN UP FOR SPECIAL OFFERS</p>
        <div className="Home__section6-offers row col-lg-6 col-12 mb-4 m-auto">
          <div className="Home__section6-offer col-lg-4 col-12">10% off on your first order</div>
          <div className="Home__section6-offer col-lg-4 col-12">Free Delivery on first order</div>
          <div className="Home__section6-offer col-lg-4 col-12">Collect loyalty points</div>
        </div>
        <div className="Home__section6-btn m-auto"><button>SIGN UP</button></div>
      </div>
  );
};

export default HomeS6;



