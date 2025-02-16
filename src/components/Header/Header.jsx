import logo from "../../assets/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header({ resetSearch, handleLoginClick, handleRegisterClick }) {
  return (
    <header className="header">
      <Link to="/" onClick={resetSearch}>
        <img className="header__logo" src={logo} alt="AOP Logo" />
      </Link>

      <div className="header__nav-container">
        <Link to="/" onClick={resetSearch}>
          <button className="header__nav-button header__home-button">
            Home
          </button>
        </Link>
        {/* <button className="header__nav-button header__shuffle-button">
          Shuffle
        </button> */}
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
    </header>
  );
}

export default Header;
