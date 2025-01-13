import SearchBar from "../SearchBar/SearchBar";
//import { animethemes } from "../../utils/constants";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.css";

function Main({ animeThemes, preloader }) {
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
    </main>
  );
}

export default Main;
