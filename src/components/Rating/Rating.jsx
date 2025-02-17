import "./Rating.css";
import { useEffect, useState } from "react";

function Rating({ defaultRating, id }) {
  const [rating, setRating] = useState(defaultRating ? defaultRating : 0);
  const [hoverRating, setHoverRating] = useState(0);

  const arrayStar = [1, 2, 3, 4, 5];

  //get ratings from localStorage
  useEffect(() => {
    const savedRating = localStorage.getItem(`rating-${id}`);
    if (savedRating) {
      setRating(parseInt(savedRating, 10));
    } else if (defaultRating) {
      setRating(defaultRating);
    }
  }, [id, defaultRating]);

  const handleRating = (rating) => {
    setRating(rating);
    localStorage.setItem(`rating-${id}`, rating);
  };

  return (
    <div className="rating">
      {arrayStar.map((index) => {
        return (
          <button
            type="button"
            key={index}
            className={
              //   index <= (rating || hoverRating) ? "rating-on" : "rating-off"
              index <= (hoverRating > 0 ? hoverRating : rating)
                ? "rating-on"
                : "rating-off"
            }
            onClick={() => handleRating(index)}
            onMouseEnter={() => setHoverRating(index)}
            onMouseLeave={() => setHoverRating(rating)}
          >
            <span className="rating-star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
}

export default Rating;
