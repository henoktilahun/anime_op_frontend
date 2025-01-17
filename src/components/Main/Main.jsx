import SearchBar from "../SearchBar/SearchBar";
//import { animethemes } from "../../utils/constants";
import AnimeCard from "../AnimeCard/AnimeCard";
import "./Main.css";
import Pagination from "../Pagination/Pagination";
import { getAnimeThemesByAnimeName } from "../../utils/api";

function Main({ animeThemes, preloader, currentPage, setCurrnetPage }) {
  // const [filteredAnimeThemes, setFilteredAnimeThemes] = useState([]);

  // useEffect(() => {
  //   if (id) {
  //     getAnimeThemesByAnimeName(animeName)
  //       .then((res) => {
  //         setDetails(res);
  //         //console.log(res, "animethemedetails res");
  //       })
  //       .catch((err) => {
  //         console.log(err, "err");
  //       })
  //       .finally(() => {
  //         setPreloader(false);
  //       });
  //   }
  // }, [id]);

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
