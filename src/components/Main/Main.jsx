import SearchBar from "../SearchBar/SearchBar";
import { animethemes } from "../../utils/constants";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.css";

function Main() {
  return (
    <main>
      <SearchBar />
      <section className="anime-cards">
        {animethemes.map((theme) => (
          <AnimeCard
            key={theme.id}
            anime={theme.anime}
            song={theme.song}
            image={theme.anime.images[0].link} //uses first image
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
