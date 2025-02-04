import SearchBar from "../SearchBar/SearchBar";
//import { animethemes } from "../../utils/constants";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.css";
import Pagination from "../Pagination/Pagination";
import { getAnimeThemesByAnimeName } from "../../utils/api";
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

  const handlePlayClick = () => {
    console.log("On Click");
    setActiveMediaPlayer(true);
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
            handlePlayClick={handlePlayClick}
          />
        ))}
      </section>
      <Pagination
        currentPage={animeName ? currentFilteredPage : currentPage}
        setCurrnetPage={animeName ? setCurrentFilteredPage : setCurrnetPage}
      />
      {activeMediaPlayer && (
        <MediaPlayer activeMediaPlayer={activeMediaPlayer} />
      )}
    </main>
  );
}

export default Main;
