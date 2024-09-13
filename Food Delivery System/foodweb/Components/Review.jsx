import React, { useState } from "react";
import './Review.css'; 
import rew1 from "../assets/p1.jpg";
import rew2 from "../assets/p2.jpg";
import rew3 from "../assets/pr4.jpeg";

const initialReviews = [
  {
    id: 1,
    name: "Emilia Fernando",
    comment: "The food was absolutely delicious! I would definitely order again.",
    image: rew1,
    rating: 5,
  },
  {
    id: 2,
    name: "Kamado Tanjiro ",
    comment: "Amazing service and the flavors were out of this world!",
    image: rew2,
    rating: 4,
  },
  {
    id: 3,
    name: "Ridma Kalpana",
    comment: "A fantastic experience from start to finish. Highly recommended!",
    image: rew3,
    rating: 5,
  },
];

const Review = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name: "Anonymous", // You can add a name input if needed
      comment,
      image: "path_to_default_image", // Provide a default image path
      rating,
    };
    setReviews([...reviews, newReview]);
    setComment('');
    setRating(1);
  };

  return (
    <div className="review-section">
      <h1 className="review-title">Customer Reviews</h1>

      <div className="review-carousel">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} className="review-image" />
            <h3 className="review-name">{review.name}</h3>
            <div className="review-rating">
              {Array.from({ length: review.rating }).map((_, i) => (
                <span key={i} className="star">★</span>
              ))}
              {Array.from({ length: 5 - review.rating }).map((_, i) => (
                <span key={i} className="star empty">★</span>
              ))}
            </div>
            <p className="review-comment">"{review.comment}"</p>
          </div>
        ))}
      </div>

      <form className="review-form" onSubmit={handleSubmit}>
        <h2>Leave a Review</h2>
        <div className="form-group">
          <label htmlFor="comment">Your Comment:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows="4"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value} {value === 1 ? "Star" : "Stars"}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-btn">Submit Review</button>
      </form>
    </div>
  );
};

export default Review;
