import "./Rating.css"
import { useState } from "react"

function Rating({defaultRating}) {
    const [rating, setRating] = useState(defaultRating ? defaultRating : 0);
    const [hoverRating, setHoverRating] = useState(0)

    const arrayStar = [1,2,3,4,5]
    const handleRating = (rating) => {
        setRating(rating)
        localStorage.setItem("sticky_rating", rating)
    }
    return (
        <div className='rating'>
            {arrayStar.map((index) => {
                return (
                    <button 
                        type="button" 
                        key={index} 
                        className={index <= (rating || hoverRating) ? "rating-on" : "rating-off"} 
                        onClick={() => handleRating(index)}
                        onMouseEnter={() => setHoverRating(index)}
                        onMouseLeave={() => setHoverRating(rating)}
                    >
                        <span className="rating-star">&#9733;</span>
                    </button>
                )
            })}
        </div> 
      )
}

export default Rating;

// First of all make a component for Rating in React js and follow this code :

// import React, { useState } from "react";
// import "./StarRating.css";

// const StarRating = () => {



// const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   return (
//     <div className="star-rating">
//       {[...Array(5)].map((star, index) => {
//         index += 1;
//         return (
//           <button
//             type="button"
//             key={index}
//             className={index <= (hover || rating) ? "on" : "off"}
//             onClick={() => setRating(index)}
//             onMouseEnter={() => setHover(index)}
//             onMouseLeave={() => setHover(rating)}
//           >
//             <span className="star fs-2">&#9733;</span>
//           </button>
//         );
//       })}
//     </div>
//   );
// };

// export default StarRating;