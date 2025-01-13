import "./AnimeThemeDetails.css";
import { useParams } from "react-router-dom";

function AnimeThemeDetials({ animeThemes, preloader }) {
  const router = useParams();
  const { id } = router;
  const backgroundUrl = animeThemes[id - 1].anime.images[0].link;

  return (
    <div
      className="anime-details__container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)), url(${backgroundUrl})`,
      }}
    >
      {preloader && <div>Loading...</div>}
      <div>
        <h3>{animeThemes[id - 1].song.title}</h3>
        <p>{animeThemes[id - 1].anime.year}</p>
      </div>
      <div>
        <img
          className="anime-details__image"
          src={animeThemes[id - 1].anime.images[0].link}
          alt={`${animeThemes[id - 1].anime.name} Cover`}
        />
        <video controls>
          <source
            src={animeThemes[id - 1].animethemeentries[0].videos[0].link}
            type="video/webm"
          ></source>
        </video>
      </div>
      <div className="anime-details__details">
        <p>{animeThemes[id - 1].anime.synopsis}</p>
        <p>Artist: {animeThemes[id - 1].song.artists[0].name}</p>
        <p>Anime: {animeThemes[id - 1].anime.name}</p>
        <p>Season: {animeThemes[id - 1].anime.season}</p>
      </div>
    </div>
  );
}

export default AnimeThemeDetials;
