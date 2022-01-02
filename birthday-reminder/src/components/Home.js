import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h3>Cousin Birthday</h3>
      <Link to="/couzdetails">Cousin Details</Link>
      <br />
      <Link to="/couzbirthday">Today Birthday</Link>
    </div>
  );
};

export default Home;
