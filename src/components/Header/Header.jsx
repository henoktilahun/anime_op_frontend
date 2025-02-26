import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ resetSearch, handleLoginClick, handleRegisterClick }) {
  const [isMobileMenuOpened, toggleMobileMenu] = useState(false);

  const handleMenuClick = () => {
    toggleMobileMenu(!isMobileMenuOpened);
  };

  return (
    <header className="header">
      <Link to="/" onClick={resetSearch}>
        <img className="header__logo" src={logo} alt="AOP Logo" />
      </Link>

      <div
        className={
          isMobileMenuOpened
            ? "header__nav-container header__nav-container-active"
            : "header__nav-container"
        }
      >
        <Link to="/" onClick={resetSearch}>
          <button className="header__nav-button header__home-button">
            Home
          </button>
        </Link>
        <button
          className="header__nav-button header__login-button"
          onClick={handleLoginClick}
        >
          Login
        </button>
        <button
          className="header__nav-button header__signup-button"
          onClick={handleRegisterClick}
        >
          Sign Up
        </button>
      </div>
      <button onClick={handleMenuClick} className="header__menu" type="button">
        <span
          className={
            isMobileMenuOpened
              ? "header__menu_type_bar header__menu_type_bar-active"
              : "header__menu_type_bar"
          }
        ></span>
        <span
          className={
            isMobileMenuOpened
              ? "header__menu_type_bar header__menu_type_bar-active"
              : "header__menu_type_bar"
          }
        ></span>
      </button>
    </header>
  );
}

export default Header;
