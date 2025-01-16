import logo from "../../assets/logo2.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="AOP Logo" />
      </Link>

      <div className="header__nav-container">
        <Link to="/">
          <button className="header__nav-button header__home-button">
            Home
          </button>
        </Link>
        <button className="header__nav-button header__shuffle-button">
          Shuffle
        </button>
        <button className="header__nav-button header__login-button">
          Login
        </button>
        <button className="header__nav-button header__signup-button">
          Sign Up
        </button>
      </div>
    </header>
  );
}

export default Header;
