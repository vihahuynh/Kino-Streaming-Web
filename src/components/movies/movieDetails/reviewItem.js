import classes from "./reviewItem.module.css";

const ReviewItem = ({ review }) => {
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
      <p className={classes.content}>{review.content}</p>
    </div>
  );
};

export default ReviewItem;
