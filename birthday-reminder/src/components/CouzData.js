import React from "react";

const CouzData = ({ cousins }) => {
  let currDate = new Date();
  let newDate = currDate.getDate();
  let newDate1 = newDate < 10 ? `0${newDate}` : `${newDate}`;
  let month = [
    "January",
    "February",
    "March",
    "Apirl",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentMonth = month[currDate.getMonth()];

  let actualDate = `${currentMonth} ${newDate1}`;

  return cousins.map(({ id, name, dob, image }) => {
    let couzDOB = dob;

    if (couzDOB === actualDate) {
      return (
        <div key={id} className="person">
          <img src={image} alt={name} />
          <div className="couz_details">
            <h4>{name}</h4>
            <p>{dob}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  });
};

export default CouzData;
