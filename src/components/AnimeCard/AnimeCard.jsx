import "./AnimeCard.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";

function AnimeCard({ id, anime, song, image, fileName, handlePlayClick }) {
  //get default rating from local storage. Eventaully this would need to be in a db
  const defaultRating = localStorage.getItem(`rating-${id}`);

  return (
    <div className="anime-card">
      <Link to={`/${id}`}>
        <img
          className="anime-card__image"
          src={image}
          alt={`${anime.name} Cover`}
        />
      </Link>
      <div className="playButton" onClick={() => handlePlayClick(fileName)}>
        <div className="circle">
          <div className="triangle"></div>
        </div>
      </div>

      <div className="anime-card__details">
        <Link to={`/${id}`}>
          <h2 className="anime-card__song">{song.title}</h2>
          <p className="anime-card__artist">
            by: {song?.artists?.[0]?.name || "Unkown Artist"}
          </p>
        </Link>
        <Rating defaultRating={defaultRating} id={id} />
      </div>
    </div>
  );
}

export default AnimeCard;
