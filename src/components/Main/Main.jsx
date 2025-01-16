import SearchBar from "../SearchBar/SearchBar";
//import { animethemes } from "../../utils/constants";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.css";
import Pagination from "../Pagination/Pagination";

function Main({ animeThemes, preloader, currentPage, setCurrnetPage }) {
  return (
    <main>
      <SearchBar />
      {preloader && <div>Loading...</div>}
      <section className="anime-cards">
        {animeThemes.map((item) => (
          <AnimeCard
            id={item.id}
            anime={item.anime}
            song={item.song}
            image={item.anime.images[0].link} //uses first image
            type={item.type}
          />
        ))}
      </section>
      <Pagination currentPage={currentPage} setCurrnetPage={setCurrnetPage} />
    </main>
  );
}

export default Main;
