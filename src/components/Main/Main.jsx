import SearchBar from "../SearchBar/SearchBar";
//import { animethemes } from "../../utils/constants";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.css";
import Pagination from "../Pagination/Pagination";
import {
  getAnimeThemesByAnimeName,
  getAnimeThemesSongByVideoId,
  getAnimeThemesSongByFileName,
} from "../../utils/api";
import { useEffect, useState } from "react";
import MediaPlayer from "../MediaPlayer/MediaPlayer";

function Main({
  animeThemes,
  preloader,
  setPreloader,
  currentPage,
  setCurrnetPage,
}) {
  const [filteredAnimeThemes, setFilteredAnimeThemes] = useState([]);
  const [animeName, setAnimeName] = useState("");
  const [currentFilteredPage, setCurrentFilteredPage] = useState(1);
  const [activeMediaPlayer, setActiveMediaPlayer] = useState(false);
  const [audioSource, setAudioSource] = useState("");

  useEffect(() => {
    setFilteredAnimeThemes(animeThemes);
  }, [animeThemes]);

  const handleSearchInput = (animeNameInput) => {
    setAnimeName(animeNameInput.target.value);
  };

  const resetSearch = () => {
    setAnimeName("");
    setFilteredAnimeThemes(animeThemes);
    setCurrentFilteredPage(1);
    setCurrentFilteredPage(1);
  };

  const handlePlayClick = (fileName) => {
    getAnimeThemesSongByFileName(fileName)
      .then((res) => {
        setActiveMediaPlayer(true);
        setAudioSource(res.videos[0].audio.link);
      })
      .catch((err) => {
        console.error("Error fetching audio source: ", err);
      });
  };

  // console.log(animeThemes, "anime themes");
  // console.log(filteredAnimeThemes, "Filtered animetheme");

  useEffect(() => {
    if (animeName !== "") {
      getAnimeThemesByAnimeName(animeName, currentFilteredPage)
        .then((res) => {
          setFilteredAnimeThemes(res.animethemes);
          //   console.log(res.meta.current_page, "currentpage meta")
          setCurrentFilteredPage(res.meta.current_page);
          //   console.log(animeName);
          //   console.log(res, "animehtemesbyname res");
        })
        .catch((err) => {
          console.log(err, "err");
        })
        .finally(() => {
          setPreloader(false);
        });
    }
  }, [animeName, currentFilteredPage]);

  return (
    <main>
      <SearchBar handleSearchInput={handleSearchInput} />
      {preloader && <div>Loading...</div>}
      <section className="anime-cards">
        {filteredAnimeThemes.map((item) => (
          <AnimeCard
            key={item.id}
            id={item.id}
            anime={item.anime}
            song={item.song}
            image={item.anime.images[0].link} //uses first image
            type={item.type}
            videoId={item.animethemeentries[0]?.videos[0]?.id}
            fileName={item.animethemeentries[0]?.videos[0]?.filename}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </section>
      <Pagination
        currentPage={animeName ? currentFilteredPage : currentPage}
        setCurrnetPage={animeName ? setCurrentFilteredPage : setCurrnetPage}
        activeMediaPlayer={activeMediaPlayer}
      />
      {activeMediaPlayer && (
        <MediaPlayer
          activeMediaPlayer={activeMediaPlayer}
          audioSource={audioSource}
        />
      )}
    </main>
  );
}

export default Main;
