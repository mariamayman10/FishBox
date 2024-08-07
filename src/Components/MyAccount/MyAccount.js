import React, { useState } from "react";
import "../../CSS/MyAccount.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import MyInfo from "./MyAccountSections/MyInfo";
import SavedCards from "./MyAccountSections/SavedCards";
import Rewards from "./MyAccountSections/Rewards";
import MyOrders from "./MyAccountSections/MyOrders";
import Drawer from "./MyAccountComp/Drawer";

const MyAccount = () => {
  const [selectedContent, setSelectedContent] = useState("MyInfo");

  const renderContent = () => {
    switch (selectedContent) {
      case "Info":
        return <MyInfo />;
      case "Cards":
        return <SavedCards />;
      case "Rewards":
        return <Rewards />;
      case "Orders":
        return <MyOrders />;
      default:
        return <MyInfo />;
    }
  };

  return (
    <>
      <NavBar />
      {/* Section 1 */}
      <div className="MyAccount__section1 mb-5">
        <p className="MyAccount__section1-p1">My Account</p>
        <span className="MyAccount__section1-sp1">HOME</span>
        <span className="MyAccount__section1-sp2">&nbsp; | &nbsp;</span>
        <span className="MyAccount__section1-sp3">My Account</span>
      </div>
      {/* Drawer */}
      <div className="mb-5">
        <Drawer onSelect={setSelectedContent} />
      </div>
      {/* Content */}
      {renderContent()}
      <Footer />
    </>
  );
};

export default MyAccount;
