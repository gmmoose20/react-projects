import React from "react";
import { Link } from "react-router-dom";
import data from "../components/data";
import CouzData from "./CouzData";

const Couzbirthday = () => {
  return (
    <div className="container">
      <h3>🥳 Happy Birthday 🥳</h3>
      <CouzData cousins={data}></CouzData>
      <Link to="/couzdetails">Cousins' Details</Link>
    </div>
  );
};

export default Couzbirthday;
