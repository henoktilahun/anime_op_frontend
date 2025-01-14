import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAnimeThemes } from "../../utils/api";
import AnimeThemeDetials from "../AnimeThemeDetials/AnimeThemeDetials";

function App() {
  const [animeThemes, setAnimeThemes] = useState([]);
  const [currentPage, setCurrnetPage] = useState(1);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    getAnimeThemes(currentPage)
      .then((res) => {
        setAnimeThemes(res.animethemes);
        setCurrnetPage(res.meta.current_page);
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setPreloader(false);
      });
  }, [currentPage]);

  //console.log(animeThemes, "animeThemes");

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                animeThemes={animeThemes}
                preloader={preloader}
                currentPage={currentPage}
                setCurrnetPage={setCurrnetPage}
              />
            }
          />
          <Route
            path="/:id"
            element={
              <AnimeThemeDetials
                // animeThemes={animeThemes}
                preloader={preloader}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
