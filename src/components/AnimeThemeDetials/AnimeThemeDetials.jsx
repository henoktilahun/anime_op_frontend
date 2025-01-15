import "./AnimeThemeDetails.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAnimeThemesById } from "../../utils/api";
import Rating from "../Rating/Rating";

function AnimeThemeDetails() {
  const router = useParams();
  const { id } = router;
  const [preloader, setPreloader] = useState(true);
  const [details, setDetails] = useState({});

  const defaultRating = localStorage.getItem("sticky_rating") //only for local testing don't put in PROD

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
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)), url(${imgSource})`,
      }}
    >
      {preloader && <div>Loading...</div>}
      <div>
        <div>
        <h3>{songTitle}</h3>
        <p>{animeYear}</p>
        </div>
        <div>
          <Rating defaultRating={defaultRating} />
        </div>
      </div>
      
      <div>
        <img
          className="anime-details__image"
          src={imgSource}
          alt={`${anime} Cover`}
          //song?.artists?.[0]?.name
        />
        {/* <video width="750" height="500" controls>
          <source src={videoSource} type="video/webm"/>
        </video> */}
        <video controls src={videoSource} width="750" height="400"></video>
      </div>
      <div className="anime-details__details">
        <p>{animeSynopsis}</p>
        <p>Artist: {songArtist || "Unknown Artist"}</p>
        <p>Anime: {anime}</p>
        <p>Season: {animeSeason}</p>
      </div>
    </div>
  );
}

export default AnimeThemeDetails;
