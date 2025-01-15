import "./AnimeCard.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

function AnimeCard({ id, anime, song, image, type }) {
  //console.log(song?.artists?.[0]?.name || "Unkown Artist");
  //console.log(id);
  const defaultRating = localStorage.getItem("sticky_rating") //only for local testing don't put in PROD
  // const handleRatingClick = (event) => {
  //       event.stopPropagation();
  //       console.log("ON CLICK")
  // }


  return (
      <div className="anime-card">
        <Link to={`/${id}`}>
          <img
            className="anime-card__image"
            src={image}
            alt={`${anime.name} Cover`}
          />
        </Link>
        <div className="anime-card__details">
          <Link to={`/${id}`}>
            <h3 className="anime-card__song">{song.title}</h3>
            <p className="anime-card__title">
              by: {song?.artists?.[0]?.name || "Unkown Artist"}
            </p>
            <p className="anime-card__title">
              Anime: {anime.name} Type: {type}
            </p>
          </Link>
          <Rating defaultRating={defaultRating}/>
          
            {/* <p className="anime-card__synopsis">{anime.synopsis}</p> */}
        </div>
      </div>
  );
}

export default AnimeCard;
