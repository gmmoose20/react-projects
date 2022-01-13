import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h3>Cousins' Birthdays</h3>
      <Link to="/couzdetails">Cousins' Details</Link>
      <br />
      <Link to="/couzbirthday">Today's Birthday</Link>
    </div>
  );
};

export default Home;
