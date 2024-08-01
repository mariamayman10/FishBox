import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import HomeS1 from "./HomeS1";
import HomeS2 from "./HomeS2";
import HomeS3 from "./HomeS3";
import HomeS4 from "./HomeS4";
import HomeS5 from "./HomeS5";
import HomeS6 from "./HomeS6";

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeS1 />
      <HomeS2 />
      <HomeS3 />
      <HomeS4 />
      <HomeS5 />
      <HomeS6 />
      <Footer />
    </>
  );
};

export default Home;
