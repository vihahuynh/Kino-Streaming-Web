import { useEffect, useState } from "react";
// import classes from "./reviews.module.css";
import movieServices from "../../services/movies";

import ReviewItem from "./reviewItem";

const Reviews = ({ mediaType, id }) => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await movieServices.getReviews(mediaType, id);
        setReview(response);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchReviews();
  }, [mediaType, id]);

  return (
    <div>
      <h5>Reviews</h5>
      {reviews.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
    </div>
  );
};

export default Reviews;
