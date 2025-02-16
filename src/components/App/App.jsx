import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { Routes, Route, Navigate } from "react-router-dom";
import { getAnimeThemes } from "../../utils/api";
import AnimeThemeDetials from "../AnimeThemeDetials/AnimeThemeDetials";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [animeThemes, setAnimeThemes] = useState([]);
  const [currentPage, setCurrnetPage] = useState(1);
  const [preloader, setPreloader] = useState(true);
  const [activeModal, setActiveModal] = useState("");

  const closeModal = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const resetSearch = () => {
    setAnimeName("");
    setFilteredAnimeThemes(animeThemes);
    setCurrentFilteredPage(1);
    setCurrentFilteredPage(1);
  };

  useEffect(() => {
    getAnimeThemes(currentPage)
      .then((res) => {
        setAnimeThemes(res.animethemes);
        //setAnimeThemes(res);
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
        <Header
          handleLoginClick={handleLoginClick}
          handleRegisterClick={handleRegisterClick}
          resetSearch={resetSearch}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                animeThemes={animeThemes}
                preloader={preloader}
                setPreloader={setPreloader}
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
      <LoginModal
        title="Log In"
        buttonText="Log In"
        activeModal={activeModal}
        closeModal={closeModal}
        isOpen={activeModal === "login"}
        handleRegistrationClick={handleRegisterClick}
      />
      <RegisterModal
        title="Register"
        buttonText="Sign Up"
        activeModal={activeModal}
        closeModal={closeModal}
        isOpen={activeModal === "register"}
        handleLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default App;
