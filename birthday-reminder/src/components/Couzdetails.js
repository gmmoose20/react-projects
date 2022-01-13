import React from "react";
import { Link } from "react-router-dom";
import CouzdataAll from "./CouzdataAll";
import data from "../components/data.js";

const Couzdetails = () => {
  return (
    <div className="container">
      <h3>Cousins' Birthday Details</h3>
      <CouzdataAll cousins={data} />
      <Link to="/couzbirthday">Today's Birthdays</Link>
    </div>
  );
};

export default Couzdetails;
