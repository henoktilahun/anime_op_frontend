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

  const defaultRating = localStorage.getItem(`rating-${id}`); //only for local testing

  useEffect(() => {
    if (id) {
      getAnimeThemesById(id)
        .then((res) => {
          setDetails(res);
          //console.log(res, "animethemedetails res");
        })
        .catch((err) => {
          console.log(err, "err");
        })
        .finally(() => {
          setPreloader(false);
        });
    }
  }, [id]);

  //console.log(details.animetheme?.anime?.images[0]?.link, "detials");
  const imgSource = details.animetheme?.anime?.images[0]?.link;
  const songTitle = details.animetheme?.song?.title;
  const animeYear = details.animetheme?.anime?.year;
  const videoSource = details.animetheme?.animethemeentries[0]?.videos[0]?.link;
  const animeSynopsis = details.animetheme?.anime?.synopsis;
  const songArtist = details.animetheme?.song?.artists[0]?.name;
  const anime = details.animetheme?.anime?.name;
  const animeSeason = details.animetheme?.anime?.season;
  //const songArtist = details.animetheme?.song?.artists?.[0]?.name
  //const sanitizedVideoSource = encodeURI(videoSource?.trim());

  //console.log(videoSource);

  return (
    <div
      className="anime-details__container"
      // style={{
      //   backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)), url(${imgSource})`,
      // }}
    >
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
          //song?.artists?.[0]?.name
        />
        {/* <video width="750" height="500" controls>
          <source src={videoSource} type="video/webm"/>
        </video> */}
        <video
          className="anime-details__video"
          controls
          src={videoSource}
          //width="750"
          //height="100%"
        ></video>
      </div>
      <div className="anime-details__details">
        <p dangerouslySetInnerHTML={{ __html: animeSynopsis }} />
        {/* <p>{animeSynopsis}</p> */}
        <p>Artist: {songArtist || "Unknown Artist"}</p>
        <p>Anime: {anime}</p>
        <p>Season: {animeSeason}</p>
      </div>
    </div>
  );
}

export default AnimeThemeDetails;
