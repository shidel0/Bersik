import React from "react";
import { Link } from "react-router-dom";
import "./Billbord.css";

const Billbord = () => {
  return (
    <div className="mainBill">
      <div className="notMainBill">
        <h1 className="billboard">
          Производитель парфюмерии с большой историей
        </h1>
        <Link to="/about" className="button">
          Узнать Больше
        </Link>
      </div>
    </div>
  );
};

export default Billbord;
