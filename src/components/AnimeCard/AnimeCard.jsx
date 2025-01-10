import "./AnimeCard.css";

function AnimeCard({ anime, song, image }) {
  return (
    <li className="card">
      <div className="anime-card">
        <img
          className="anime-card__image"
          src={image}
          alt={`${anime.name} Cover`}
        />
        <div className="anime-card__details">
          <h3 className="anime-card__title">{anime.name}</h3>
          <p className="anime-card__song">{song.title}</p>
          {/* <p className="anime-card__synopsis">{anime.synopsis}</p> */}
        </div>
      </div>
    </li>
  );
}

export default AnimeCard;
