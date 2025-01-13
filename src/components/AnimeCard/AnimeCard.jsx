import "./AnimeCard.css";
import { Link } from "react-router-dom";

function AnimeCard({ id, anime, song, image, type }) {
  //console.log(song?.artists?.[0]?.name || "Unkown Artist");
  //console.log(id);
  return (
    <Link to={`/${id}`}>
      <div className="anime-card">
        <img
          className="anime-card__image"
          src={image}
          alt={`${anime.name} Cover`}
        />
        <div className="anime-card__details">
          <h3 className="anime-card__song">{song.title}</h3>
          <p className="anime-card__title">
            by: {song?.artists?.[0]?.name || "Unkown Artist"}
          </p>
          <p className="anime-card__title">
            Anime: {anime.name} Type: {type}
          </p>
          {/* <p className="anime-card__synopsis">{anime.synopsis}</p> */}
        </div>
      </div>
    </Link>
  );
}

export default AnimeCard;
