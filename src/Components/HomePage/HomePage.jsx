import React from "react";
import AboutFranshize from "./AboutFranshize/AboutFranshize";
import Billbord from "./BillBord/Billbord";
import TwoSlider from "./TwoSlider/TwoSlider";
// import { Redirect } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <Billbord />
        <TwoSlider />
        <AboutFranshize />
      </div>
    </>
  );
};

export default HomePage;
