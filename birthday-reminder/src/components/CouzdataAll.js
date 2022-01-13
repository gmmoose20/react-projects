import React from "react";

const CouzdataAll = ({ cousins }) => {
  return cousins.map((item) => {
    const { id, name, dob, image } = item;
    return (
      <div key={id} className="person">
        <img src={image} alt={name} />
        <div className="couz_details">
          <h4>{name}</h4>
          <p>Date of Birth: {dob}</p>
        </div>
      </div>
    );
  });
};

export default CouzdataAll;
