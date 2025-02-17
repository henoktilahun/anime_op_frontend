import "./AnimeCard.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import playButton from "../../assets/play-button.png";

function AnimeCard({
  id,
  anime,
  song,
  image,
  videoId,
  fileName,
  handlePlayClick,
}) {
  //console.log(song?.artists?.[0]?.name || "Unkown Artist");
  //console.log(id);
  const defaultRating = localStorage.getItem(`rating-${id}`); //only for local testing
  // const handleRatingClick = (event) => {
  //       event.stopPropagation();
  //       console.log("ON CLICK")
  // }

  //const videoId = videoId;

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

      {/* <div className="play-button__container">
        <button className="play-button">
          <img
            className="play-button__image"
            src={playButton}
            alt="Play Button"
          />
        </button>
      </div> */}
      <div className="anime-card__details">
        <Link to={`/${id}`}>
          <h2 className="anime-card__song">{song.title}</h2>
          <p className="anime-card__artist">
            by: {song?.artists?.[0]?.name || "Unkown Artist"}
          </p>
          {/* <p className="anime-card__title">
            Anime: {anime.name} Type: {type}
          </p> */}
        </Link>
        <Rating defaultRating={defaultRating} id={id} />

        {/* <p className="anime-card__synopsis">{anime.synopsis}</p> */}
      </div>
    </div>
  );
}

export default AnimeCard;
