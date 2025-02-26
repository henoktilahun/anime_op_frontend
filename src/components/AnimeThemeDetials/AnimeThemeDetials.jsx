import "./AnimeThemeDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnimeThemesById } from "../../utils/api";
import Rating from "../Rating/Rating";
import Preloader from "../Preloader/Preloader";

function AnimeThemeDetails() {
  const router = useParams();
  const { id } = router;
  const [preloader, setPreloader] = useState(true);
  const [details, setDetails] = useState({});

  //get rating from local storage
  const defaultRating = localStorage.getItem(`rating-${id}`);

  //gets anime themes by id
  useEffect(() => {
    if (id) {
      getAnimeThemesById(id)
        .then((res) => {
          setDetails(res);
        })
        .catch((err) => {
          console.log(err, "err");
        })
        .finally(() => {
          setPreloader(false);
        });
    }
  }, [id]);

  //gather all the anime theme details to be displayed in details page
  const imgSource = details.animetheme?.anime?.images[0]?.link;
  const songTitle = details.animetheme?.song?.title;
  const animeYear = details.animetheme?.anime?.year;
  const videoSource = details.animetheme?.animethemeentries[0]?.videos[0]?.link;
  const animeSynopsis = details.animetheme?.anime?.synopsis;
  const songArtist = details.animetheme?.song?.artists[0]?.name;
  const anime = details.animetheme?.anime?.name;
  const animeSeason = details.animetheme?.anime?.season;

  return (
    <div className="anime-details__container">
      {preloader && <Preloader />}
      <div className="anime-detials__heading-container">
        <div className="anime-detials__heading">
          <h2 className="anime-details__title">{songTitle}</h2>
          <p className="anime-details__year">{animeYear}</p>
        </div>
        <div className="anime-detials__heading">
          <h3 className="anime-details__sub-title">Rating</h3>
          <Rating defaultRating={defaultRating} id={id} />
        </div>
      </div>

      <div className="video__image-container">
        <img
          className="anime-details__image"
          src={imgSource}
          alt={`${anime} Cover`}
        />
        <video
          className="anime-details__video"
          controls
          src={videoSource}
        ></video>
      </div>
      <div className="anime-details__details">
        <p dangerouslySetInnerHTML={{ __html: animeSynopsis }} />
        <p>
          <span className="anime-details__text">Artist:</span>{" "}
          {songArtist || "Unknown Artist"}
        </p>
        <p>
          <span className="anime-details__text">Anime:</span> {anime}
        </p>
        <p>
          <span className="anime-details__text">Season:</span> {animeSeason}
        </p>
      </div>
    </div>
  );
}

export default AnimeThemeDetails;
