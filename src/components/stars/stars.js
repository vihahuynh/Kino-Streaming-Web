import React from "react";

import classes from "./stars.module.css";

const Star = ({ type }) => {
  return (
    <svg className={classes.star}>
      <use xlinkHref={`/sprite.svg#icon-star-${type}`}></use>
    </svg>
  );
};

// const Star = ({ type }) => {
//     return (
//       <img
//         className={classes.star}
//         alt={`star-${type}`}
//         src={`/star-${type}.svg`}
//       />
//     );
//   };

const Stars = ({ rating }) => {
  const roundStar = Math.trunc(rating);
  const fullStars = new Array(roundStar).fill(0);
  let emptyStar;
  if (rating - roundStar >= 0.5) {
    emptyStar = new Array(10 - 1 - roundStar).fill(0);
  } else {
    emptyStar = new Array(10 - roundStar).fill(0);
  }

  return (
    <div>
      {fullStars.map((_, i) => (
        <Star key={i} type="full" />
      ))}
      {rating - roundStar >= 0.5 && <Star type="half" />}
      {emptyStar.map((_, i) => (
        <Star key={i} type="empty" />
      ))}
    </div>
  );
};

export default Stars;
