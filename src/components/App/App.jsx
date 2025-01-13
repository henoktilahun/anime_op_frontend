import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAnimeThemes } from "../../utils/api";
import AnimeThemeDetials from "../AnimeThemeDetials/AnimeThemeDetials";

function App() {
  const [animeThemes, setAnimeThemes] = useState([]);
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    getAnimeThemes()
      .then((res) => {
        setAnimeThemes(res.animethemes);
        //console.log(res.animethemes, "res");
      })
      .catch((err) => {
        console.log(err, "err");
      })
      .finally(() => {
        setPreloader(false);
      });
  }, []);

  console.log(animeThemes, "animeThemes");

  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Main animeThemes={animeThemes} preloader={preloader} />}
          />
          <Route
            path="/:id"
            element={
              <AnimeThemeDetials
                animeThemes={animeThemes}
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
