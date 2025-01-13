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
        <button className="header__home-button">Home</button>
        <button className="header__shuffle-button">Shuffle</button>
        <button className="header__login-button">Login</button>
        <button className="header__signup-button">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
