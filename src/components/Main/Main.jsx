import SearchBar from "../SearchBar/SearchBar";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.css";
import Pagination from "../Pagination/Pagination";
import {
  getAnimeThemesByAnimeName,
  getAnimeThemesSongByFileName,
} from "../../utils/api";
import { useEffect, useState } from "react";
import MediaPlayer from "../MediaPlayer/MediaPlayer";
import Preloader from "../Preloader/Preloader";

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

  // When clicked, gets anime theme song based on anime file name. Would be beter if we can pre-load the audio to play.
  // No direct route to find song via theme id or something else easier. Will need to find a better way to retrieve the songs
  const handlePlayClick = (fileName) => {
    getAnimeThemesSongByFileName(fileName)
      .then((res) => {
        setActiveMediaPlayer(true);
        setAudioSource(res.videos[0].audio.link);
      })
      .catch((err) => {
        console.error("Error fetching audio source: ", err);
      })
      .finally(() => {
        setPreloader(false);
      });
  };

  // Gets anime themes by name. Used for search.
  useEffect(() => {
    if (animeName !== "") {
      getAnimeThemesByAnimeName(animeName, currentFilteredPage)
        .then((res) => {
          setFilteredAnimeThemes(res.animethemes);
          setCurrentFilteredPage(res.meta.current_page);
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
      {preloader && <Preloader />}
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
