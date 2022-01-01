import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h3>Cousin Birthday</h3>
      <Link to="/couzdetails">Cousin Details</Link>
    </div>
  );
};

export default Home;
