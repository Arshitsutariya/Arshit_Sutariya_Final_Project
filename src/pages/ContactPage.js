import React, { useState } from "react";
import RatingStars from "react-rating-stars-component";
import "./../css/ContactPage.css"; // Import the CSS file

function ContactPage() {

  const [rating, setRating] = useState(0);

  const [comment, setComment] = useState("");

  const handleRatingChange = setRating;

  const handleCommentChange = (e) => setComment(e.target.value);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  return (
    <div className="main-div">
      <div className="contact-page">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Rating:</label>
            <RatingStars 
              count={5} 
              onChange={handleRatingChange} 
              size={24} 
              value={rating} 
            />
          </div>
          <div className="form-group">
            <label>Comment:</label>
            <textarea
              rows="4"
              cols="50"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your comment here..."
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
