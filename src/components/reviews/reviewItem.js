import { useState } from "react";
import classes from "./reviewItem.module.css";

const ReviewItem = ({ review }) => {
  const [showMore, setShowMore] = useState(false);

  const avatar_path = review.author_details.avatar_path?.includes("http")
    ? review.author_details.avatar_path.slice(1)
    : `https://image.tmdb.org/t/p/w500${review.author_details.avatar_path}`;

  return (
    <div className={classes.container}>
      <div className={classes.review}>
        <img
          className={classes["review__user-img"]}
          src={avatar_path}
          alt="Avatar"
        />
        <span className={classes["review__user-name"]}>{review.author}</span>
        <span className={classes.review__date}>
          {review.created_at?.slice(0, 10)}
        </span>
        <span className={classes.review__rating}>
          <svg className={classes.star}>
            <use
              xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#icon-star-full`}
            ></use>
          </svg>
          {review.author_details.rating}
        </span>
      </div>
      <div>
        <p className={classes.content}>
          {review.content?.split(" ").length < 100 || showMore
            ? review.content
            : `${review.content?.split(" ").slice(0, 100).join(" ")}... `}
        </p>
        {review.content?.split(" ").length > 100 && (
          <button
            className={classes.button}
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewItem;
